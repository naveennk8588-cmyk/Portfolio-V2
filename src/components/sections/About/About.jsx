import { motion } from "framer-motion";
import aboutImage from "../../../assets/about-profile.png";
import "./About.css";

function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-bg-glow"></div>

            <div className="about-container">

                {/* SECTION HEADER */}
                <motion.div
                    className="about-heading"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-tag">ABOUT ME</span>

                    <h2>
                        Turning Ideas Into{" "}
                        <span>Digital Experiences</span>
                    </h2>

                    <p>
                        A passionate developer focused on building modern,
                        scalable and user-friendly web applications.
                    </p>
                </motion.div>

                {/* MAIN CONTENT */}
                <div className="about-grid">

                    {/* LEFT */}
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9 }}
                    >
                        <div className="about-card main-card">
                            <div className="card-number">01</div>

                            <h3>Who I Am</h3>

                            <p>
                                I'm Naveen Kumar M, a Python Full Stack Developer
                                passionate about creating clean, modern and scalable
                                web applications.
                            </p>

                            <p>
                                I enjoy working across both frontend and backend
                                technologies, connecting engaging user interfaces
                                with reliable server-side systems and databases.
                            </p>

                            <p>
                                My development journey includes React, Python,
                                Django, REST APIs and MySQL, with a continuous focus
                                on learning, improving and building better solutions.
                            </p>
                        </div>

                        {/* MINI CARDS */}
                        <div className="about-mini-grid">

                            <motion.div
                                className="about-card mini-card"
                                whileHover={{ y: -8, scale: 1.01 }}
                            >
                                <span className="mini-icon">⚡</span>

                                <h4>Problem Solver</h4>

                                <p>
                                    Breaking complex requirements into simple,
                                    practical and maintainable solutions.
                                </p>
                            </motion.div>

                            <motion.div
                                className="about-card mini-card"
                                whileHover={{ y: -8, scale: 1.01 }}
                            >
                                <span className="mini-icon">🚀</span>

                                <h4>Fast Learner</h4>

                                <p>
                                    Exploring new technologies and continuously
                                    improving my development workflow.
                                </p>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, x: 60, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="about-orbit"></div>

                        {/* PROFILE PANEL */}
                        <motion.div
                            className="about-profile-panel"
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="portrait-glow"></div>

                            <div className="portrait-frame">
                                <img
                                    src={aboutImage}
                                    alt="Naveen Kumar"
                                    className="about-profile-image"
                                />
                                <div className="image-overlay">
                                    <span>Developer Workspace</span>
                                    <small>Build • Learn • Improve</small>
                                </div>
                            </div>


                            <div className="portrait-info">
                                <div>
                                    <strong>Naveen Kumar M</strong>
                                    <span>Python Full Stack Developer</span>
                                </div>

                                <div className="live-status">
                                    <i></i>
                                    Building
                                </div>
                            </div>
                        </motion.div>

                        {/* CURRENTLY BUILDING */}
                        <motion.div
                            className="about-info-card building-card"
                            whileHover={{ y: -6 }}
                        >
                            <span className="info-label">
                                CURRENTLY BUILDING
                            </span>

                            <strong>Full Stack Web Apps</strong>

                            <div className="stack-row">
                                <span>React</span>
                                <span>Django</span>
                                <span>MySQL</span>
                            </div>
                        </motion.div>

                        {/* DEVELOPMENT FOCUS */}
                        <motion.div
                            className="about-info-card focus-card"
                            whileHover={{ y: -6 }}
                        >
                            <span className="info-label">
                                DEVELOPMENT FOCUS
                            </span>

                            <strong>Clean UI + Reliable APIs</strong>

                            <span className="focus-text">
                                Responsive design · REST APIs · Database integration
                            </span>
                        </motion.div>

                        {/* EXPERIENCE */}
                        <motion.div
                            className="experience-pill"
                            animate={{ y: [0, 7, 0] }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <strong>04+</strong>
                            <span>Years Experience</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* VALUES */}
                <motion.div
                    className="about-values"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <strong>01</strong>
                        <span>Clean Code</span>
                    </div>

                    <div>
                        <strong>02</strong>
                        <span>Responsive Design</span>
                    </div>

                    <div>
                        <strong>03</strong>
                        <span>Scalable Solutions</span>
                    </div>

                    <div>
                        <strong>04</strong>
                        <span>Continuous Learning</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default About;