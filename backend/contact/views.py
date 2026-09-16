from django.conf import settings

import resend

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ContactMessage
from .serializers import ContactMessageSerializer


class ContactMessageView(APIView):

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {
                    "success": False,
                    "message": "Please check the submitted information.",
                    "errors": serializer.errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        contact_message = serializer.save()

        # --------------------------------------------------
        # EMAIL TO ADMIN
        # --------------------------------------------------

        admin_subject = (
            f"New Portfolio Contact: {contact_message.subject}"
        )

        try:
            resend.api_key = settings.RESEND_API_KEY

            resend.Emails.send(
                {
                    "from": "Portfolio <onboarding@resend.dev>",
                    "to": [settings.CONTACT_EMAIL],
                    "subject": admin_subject,
                    "html": f"""
                        <h2>New Portfolio Contact Message</h2>

                        <p>
                            <strong>Name:</strong>
                            {contact_message.name}
                        </p>

                        <p>
                            <strong>Email:</strong>
                            {contact_message.email}
                        </p>

                        <p>
                            <strong>Subject:</strong>
                            {contact_message.subject}
                        </p>

                        <p>
                            <strong>Message:</strong>
                        </p>

                        <p>
                            {contact_message.message}
                        </p>

                        <p>
                            <strong>Received at:</strong>
                            {contact_message.created_at}
                        </p>
                    """,
                }
            )

        except Exception as email_error:
            print("RESEND EMAIL ERROR:", email_error)

            return Response(
                {
                    "success": False,
                    "message": (
                        "Message was saved, but email delivery failed."
                    ),
                    "data": ContactMessageSerializer(
                        contact_message
                    ).data,
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        return Response(
            {
                "success": True,
                "message": (
                    "Your message has been sent successfully."
                ),
                "data": ContactMessageSerializer(
                    contact_message
                ).data,
            },
            status=status.HTTP_201_CREATED,
        )