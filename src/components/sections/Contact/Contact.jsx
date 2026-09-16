import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

const contactInfo = [
  {
  label: "Email",
  value: "naveen.nk8588@gmail.com",
  icon: "✉",
  action:
    "https://mail.google.com/mail/?view=cm&fs=1&to=naveen.nk8588@gmail.com",
  external: true,
},
  {
    label: "Call Me",
    value: "+91 9384166156",
    icon: "☎",
    action: "tel:+919384166156",
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    icon: "◉",
    action: "https://wa.me/919384166156",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/naveennk8588-cmyk",
    icon: "⌘",
    action: "https://github.com/naveennk8588-cmyk",
    external: true,
  },
  {
    label: "Location",
    value: "Mettur, Tamil Nadu",
    icon: "⌖",
    action:
      "https://www.google.com/maps/search/?api=1&query=Mettur,Tamil+Nadu,India",
    external: true,
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch(
  "https://portfolio-v2-backend-zc6p.onrender.com/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.errors
            ? JSON.stringify(data.errors)
            : "Something went wrong."
        );
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-bg"></div>

      <div className="contact-orb contact-orb-1"></div>
      <div className="contact-orb contact-orb-2"></div>

      <div className="contact-container">

        {/* HEADER */}
        <motion.div
          className="contact-heading"
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="section-tag">
            GET IN TOUCH
          </span>

          <h2>
            Let's Build Something{" "}
            <span>Amazing</span>
          </h2>

          <p>
            Have a project, opportunity or idea in mind?
            Let's connect and create something meaningful together.
          </p>
        </motion.div>


        {/* MAIN LAYOUT */}
        <div className="contact-layout">

          {/* LEFT */}
          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className="contact-intro">

              <span className="contact-small-title">
                LET'S CONNECT
              </span>

              <h3>
                Have an idea?
                <br />
                <span>Let's make it happen.</span>
              </h3>

              <p>
                Whether you have a project idea, job opportunity,
                collaboration request or just want to say hello,
                feel free to reach out.
              </p>

            </div>


            {/* CONTACT DETAILS */}
            <div className="contact-details">

              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.action}
                  target={
                    item.external ? "_blank" : undefined
                  }
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-detail-card"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    x: 6,
                  }}
                >

                  <div className="contact-icon">
                    {item.icon}
                  </div>

                  <div className="contact-detail-text">
                    <span>
                      {item.label}
                    </span>

                    <strong>
                      {item.value}
                    </strong>
                  </div>

                  <div className="contact-detail-arrow">
                    ↗
                  </div>

                </motion.a>
              ))}

            </div>

          </motion.div>


          {/* RIGHT FORM */}
          <motion.div
            className="contact-form-wrapper"
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* FORM HEADER */}
              <div className="form-header">

                <div>
                  <span>
                    SEND A MESSAGE
                  </span>

                  <h4>
                    Start a conversation
                  </h4>
                </div>

                <div className="form-status">

                  <span></span>

                  {status === "sending"
                    ? "SENDING"
                    : "AVAILABLE"}

                </div>

              </div>


              {/* NAME */}
              <div className="form-group">

                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />

              </div>


              {/* EMAIL */}
              <div className="form-group">

                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />

              </div>


              {/* SUBJECT */}
              <div className="form-group">

                <label htmlFor="subject">
                  SUBJECT
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* MESSAGE */}
              <div className="form-group">

                <label htmlFor="message">
                  YOUR MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                className="contact-submit"
                disabled={status === "sending"}
                whileHover={
                  status !== "sending"
                    ? { y: -3 }
                    : {}
                }
                whileTap={
                  status !== "sending"
                    ? { scale: 0.98 }
                    : {}
                }
              >

                <span>
                  {status === "sending"
                    ? "SENDING..."
                    : "SEND MESSAGE"}
                </span>

                <span className="submit-arrow">
                  {status === "sending"
                    ? "..."
                    : "→"}
                </span>

              </motion.button>


              {/* SUCCESS / ERROR */}
              <AnimatePresence mode="wait">

                {status === "success" && (
                  <motion.div
                    className="contact-status-message contact-success"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    className="contact-status-message contact-error"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                  >
                    ✕ Unable to send message. Please try again.
                  </motion.div>
                )}

              </AnimatePresence>


              <p className="form-note">
                Your message will be securely submitted
                to the portfolio backend.
              </p>

            </form>

          </motion.div>

        </div>


        {/* BOTTOM */}
        <motion.div
          className="contact-bottom"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="contact-bottom-line"></div>

          <span>
            LET'S CREATE • BUILD • GROW
          </span>

          <div className="contact-bottom-line"></div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;