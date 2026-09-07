from django.conf import settings
from django.core.mail import send_mail

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
        # EMAIL 1: NOTIFICATION TO YOU
        # --------------------------------------------------

        admin_subject = (
            f"New Portfolio Contact: {contact_message.subject}"
        )

        admin_message = f"""
You received a new message from your portfolio website.

Name: {contact_message.name}
Email: {contact_message.email}
Subject: {contact_message.subject}

Message:
{contact_message.message}

Received at:
{contact_message.created_at}
"""

        # --------------------------------------------------
        # EMAIL 2: ACKNOWLEDGEMENT TO VISITOR
        # --------------------------------------------------

        visitor_subject = "Thank you for contacting Naveen Kumar"

        visitor_message = f"""
Hello {contact_message.name},

Thank you for contacting me through my portfolio website.

I have received your message regarding:

Subject: {contact_message.subject}

I will review your message and get back to you as soon as possible.

Best regards,
Naveen Kumar M
Python Full Stack Developer
"""

        try:
            # Send notification to you
            send_mail(
                subject=admin_subject,
                message=admin_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[
                    settings.EMAIL_HOST_USER
                ],
                fail_silently=False,
            )

            # Send acknowledgement to visitor
            send_mail(
                subject=visitor_subject,
                message=visitor_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[
                    contact_message.email
                ],
                fail_silently=False,
            )

        except Exception as email_error:
            print("EMAIL ERROR:", email_error)

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