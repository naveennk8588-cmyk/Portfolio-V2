import { motion } from "framer-motion";
import "./Skills.css";

const frontendSkills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 85 },
  { name: "Bootstrap", level: 90 },
];

const backendSkills = [
  { name: "Python", level: 90 },
  { name: "Django", level: 84 },
  { name: "REST API", level: 82 },
];

const databaseSkills = [
  { name: "MySQL", level: 85 },
  { name: "Git & GitHub", level: 88 },
];

function SkillBar({ name, level, delay = 0 }) {
  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      <div className="skill-top">
        <span>{name}</span>

        <motion.strong
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.25 }}
        >
          {level}%
        </motion.strong>
      </div>

      <div className="skill-track">
        <motion.div
          className="skill-progress"
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${level}%`,
          }}
          viewport={{
            once: true,
            amount: 0.6,
          }}
          transition={{
            duration: 1.4,
            delay: delay + 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </motion.div>
  );
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-glow glow-left"></div>
      <div className="skills-glow glow-right"></div>

      <div className="skills-container">

        {/* HEADING */}
        <motion.div
          className="skills-heading"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <span className="section-tag">MY SKILLS</span>

          <h2>
            Technologies I{" "}
            <span>Work With</span>
          </h2>

          <p>
            A practical full-stack toolkit focused on building
            clean interfaces, reliable APIs and scalable
            database-driven applications.
          </p>
        </motion.div>

        {/* SKILL CARDS */}
        <div className="skills-grid">

          {/* FRONTEND */}
          <motion.div
            className="skill-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <div className="skill-card-header">
              <div className="skill-icon">01</div>

              <div>
                <span>DEVELOPMENT</span>
                <h3>Frontend</h3>
              </div>
            </div>

            <p className="skill-card-description">
              Building responsive, accessible and interactive
              user interfaces.
            </p>

            <div className="skill-list">
              {frontendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={index * 0.09}
                />
              ))}
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            className="skill-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: 0.12,
            }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <div className="skill-card-header">
              <div className="skill-icon">02</div>

              <div>
                <span>SERVER SIDE</span>
                <h3>Backend</h3>
              </div>
            </div>

            <p className="skill-card-description">
              Developing secure backend services and RESTful
              APIs with Python-based technologies.
            </p>

            <div className="skill-list">
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={index * 0.12}
                />
              ))}
            </div>
          </motion.div>

          {/* DATABASE */}
          <motion.div
            className="skill-card database-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              delay: 0.24,
            }}
            whileHover={{
              y: -10,
              scale: 1.005,
            }}
          >
            <div className="skill-card-header">
              <div className="skill-icon">03</div>

              <div>
                <span>DATA & TOOLS</span>
                <h3>Database & Tools</h3>
              </div>
            </div>

            <p className="skill-card-description">
              Managing relational data and maintaining clean,
              version-controlled development workflows.
            </p>

            <div className="skill-list">
              {databaseSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={index * 0.12}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* TECH STACK */}
        <motion.div
          className="tech-strip"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >
          {[
            "React",
            "JavaScript",
            "Python",
            "Django",
            "REST API",
            "MySQL",
            "Git",
            "GitHub",
          ].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: 0.35 + index * 0.07,
                type: "spring",
                stiffness: 180,
                damping: 14,
              }}
              whileHover={{
                y: -5,
                scale: 1.06,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;