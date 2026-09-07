import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="footer-logo">
              NK
            </a>

            <h3>
              Naveen Kumar M
            </h3>

            <p>
              Python Full Stack Developer passionate about
              building modern, responsive and meaningful web applications.
            </p>
          </motion.div>


          {/* QUICK LINKS */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <span className="footer-title">
              QUICK LINKS
            </span>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#training">Training</a>
            <a href="#contact">Contact</a>
          </motion.div>


          {/* CONNECT */}
          <motion.div
            className="footer-connect"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <span className="footer-title">
              CONNECT
            </span>

            <a href="mailto:naveen.nk8588@gmail.com">
              Email
            </a>

            <a href="tel:+919384166156">
              Call Me
            </a>

            <a
              href="https://wa.me/919384166156"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://github.com/naveennk8588-cmyk"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </motion.div>

        </div>


        {/* DIVIDER */}
        <div className="footer-divider"></div>


        {/* BOTTOM */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <p>
            © {currentYear} Naveen Kumar M. All rights reserved.
          </p>

          <span>
            Built with React • Framer Motion • Passion
          </span>

          <a
            href="#home"
            className="footer-back-top"
            aria-label="Back to top"
          >
            ↑
          </a>

        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;