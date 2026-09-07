import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import profileImage from "../../../assets/profile.png";
import "./Hero.css";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    { stiffness: 120, damping: 20 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    { stiffness: 120, damping: 20 }
  );

  const moveX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-20, 20]),
    { stiffness: 80, damping: 20 }
  );

  const moveY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-20, 20]),
    { stiffness: 80, damping: 20 }
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const [hoveredNameIndex, setHoveredNameIndex] = useState(null);

  const nameLines = ["Naveen", "Kumar"];

  return (
    <section
      className="hero"
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <motion.div
        className="cursor-glow"
        style={{
          x: moveX,
          y: moveY,
        }}
      />

      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
      <div className="hero-orb orb-3"></div>

      {/* Particles */}
      <span className="particle p1"></span>
      <span className="particle p2"></span>
      <span className="particle p3"></span>
      <span className="particle p4"></span>
      <span className="particle p5"></span>
      <span className="particle p6"></span>
      <span className="particle p7"></span>
      <span className="particle p8"></span>

      <div className="hero-main">

        {/* ================= LEFT ================= */}

        <motion.div
          className="hero-left"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <motion.div
            className="availability"
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <span className="status-dot"></span>

            <span>Available for opportunities</span>
          </motion.div>

          <motion.p
            className="hero-small-text"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            Hello, I'm <span>👋</span>
          </motion.p>

          {/* Advanced Water-Wave Name */}
          <div
            className="hero-name"
            onMouseLeave={() => setHoveredNameIndex(null)}
          >
            {nameLines.map((word, lineIndex) => (
              <div className="name-line" key={word}>
                {word.split("").map((char, charIndex) => {
                  const globalIndex =
                    lineIndex * 10 + charIndex;

                  const distance =
                    hoveredNameIndex === null
                      ? 99
                      : Math.abs(globalIndex - hoveredNameIndex);

                  const isHovered =
                    hoveredNameIndex === globalIndex;

                  const waveY =
                    hoveredNameIndex === null
                      ? 0
                      : distance === 0
                        ? -16
                        : distance === 1
                          ? -10
                          : distance === 2
                            ? -5
                            : 0;

                  const waveScale =
                    hoveredNameIndex === null
                      ? 1
                      : distance === 0
                        ? 1.10
                        : distance === 1
                          ? 1.06
                          : distance === 2
                            ? 1.03
                            : 1;

                  const waveRotate =
                    hoveredNameIndex === null
                      ? 0
                      : isHovered
                        ? charIndex % 2 === 0
                          ? -4
                          : 4
                        : distance === 1
                          ? charIndex % 2 === 0
                            ? 2
                            : -2
                          : 0;

                  return (
                    <motion.span
                      key={`${char}-${globalIndex}`}
                      className={`wave-letter ${
                        lineIndex === 1 ? "second-line-letter" : ""
                      }`}
                      onMouseEnter={() =>
                        setHoveredNameIndex(globalIndex)
                      }
                      animate={{
                        y: waveY,
                        scale: waveScale,
                        rotate: waveRotate,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 15,
                        mass: 0.35,
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}

                {lineIndex === 1 && (
                  <motion.span
                    className="wave-letter name-m"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      rotate: -18,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      delay: 0.55,
                      duration: 0.7,
                      type: "spring",
                    }}
                  >
                    M
                  </motion.span>
                )}
              </div>
            ))}
          </div>

          <motion.div
            className="hero-role"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            Python{" "}
            <span className="animated-gradient-text">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.p
            className="hero-description"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            I design and develop modern, responsive and scalable web
            applications using React, Django, REST APIs and MySQL.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <motion.a
              href="#projects"
              className="hero-btn primary"
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <span>View My Projects</span>
              <b>↗</b>
            </motion.a>

            <motion.button
              type="button"
              className="hero-btn secondary"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Naveen-Kumar-M-Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <span>Download CV</span>
              <b>↓</b>
            </motion.button>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="hero-socials"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <motion.a
              href="https://github.com/naveennk8588-cmyk"
              className="social-item"
              whileHover={{ y: -5 }}
            >
              GitHub
            </motion.a>

            <motion.a
              href="#"
              className="social-item"
              whileHover={{ y: -5 }}
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=naveen.nk8588@gmail.com"
              className="social-item"
              whileHover={{ y: -5 }}
            >
              Email
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          className="hero-right"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <div className="image-stage">

            {/* Dynamic glow */}
            <motion.div
              className="image-glow"
              animate={{
                scale: [0.95, 1.08, 0.95],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Orbit rings */}
            <motion.div
              className="ring ring-1"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="ring ring-2"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="ring ring-3"
              animate={{
                scale: [0.98, 1.04, 0.98],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            {/* Orbit dots */}
            <motion.div
              className="orbit-dot orbit-dot-1"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="orbit-dot orbit-dot-2"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="orbit-dot orbit-dot-3"
              animate={{
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Profile with 3D mouse effect */}
            <motion.div
              className="profile-frame"
              style={{
                rotateX,
                rotateY,
              }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.04,
              }}
            >
              <div className="profile-inner">
                <img
                  src={profileImage}
                  alt="Naveen Kumar"
                  className="profile-image"
                />

                <div className="image-shine"></div>
              </div>
            </motion.div>

            {/* React */}
            <motion.div
              className="tech-badge react-badge"
              animate={{
                y: [0, -14, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <strong>React</strong>
              <span>Frontend</span>
            </motion.div>

            {/* Django */}
            <motion.div
              className="tech-badge django-badge"
              animate={{
                y: [0, 12, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <strong>Django</strong>
              <span>Backend</span>
            </motion.div>

            {/* MySQL */}
            <motion.div
              className="tech-badge mysql-badge"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <strong>MySQL</strong>
              <span>Database</span>
            </motion.div>

            <motion.div
              className="code-pill"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>&lt;</span>
              Full Stack
              <span>/&gt;</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ================= STATS ================= */}

      <motion.div
        className="hero-stats"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
      >
        <motion.div
          className="stat-box"
          whileHover={{ y: -5 }}
        >
          <strong>03+</strong>
          <span>Projects Completed</span>
        </motion.div>

        <div className="stat-line"></div>

        <motion.div
          className="stat-box"
          whileHover={{ y: -5 }}
        >
          <strong>04+</strong>
          <span>Years Experience</span>
        </motion.div>

        <div className="stat-line"></div>

        <motion.div
          className="stat-box"
          whileHover={{ y: -5 }}
        >
          <strong>10+</strong>
          <span>Technologies</span>
        </motion.div>

        <div className="stat-line"></div>

        <motion.div
          className="stat-box"
          whileHover={{ y: -5 }}
        >
          <strong>100%</strong>
          <span>Passion to Build</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;