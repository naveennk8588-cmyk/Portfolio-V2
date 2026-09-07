import { motion } from "framer-motion";
import "./Training.css";

const trainingData = [
  {
    id: "01",
    title: "Python Full Stack Developer",
    organization: "Vetri IT System, Surandai",
    period: "Currently Learning",
    type: "Current Training",
    description:
      "Currently learning full stack web development with a focus on building modern frontend applications, backend APIs and database-driven web systems.",
    skills: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Django",
      "REST API",
      "MySQL",
      "Git & GitHub",
    ],
    active: true,
  },

  {
    id: "02",
    title: "In-Plant Training",
    organization: "Durga Tech, Erode",
    period: "Industrial Training",
    type: "Training",
    description:
      "Completed in-plant training and gained practical exposure to an industrial working environment and technical processes.",
    skills: [
      "Industrial Exposure",
      "Technical Learning",
      "Practical Experience",
    ],
  },

  {
    id: "03",
    title: "Industrial Visit",
    organization: "Pykara Hydro Power Plant, Ooty",
    period: "Industrial Visit",
    type: "Academic Exposure",
    description:
      "Visited Pykara Hydro Power Plant and gained practical exposure to hydroelectric power generation and industrial operations.",
    skills: [
      "Power Generation",
      "Industrial Exposure",
      "Technical Observation",
    ],
  },
];

function Training() {
  return (
    <section className="training-section" id="training">
      <div className="training-bg"></div>

      <div className="training-orb training-orb-1"></div>
      <div className="training-orb training-orb-2"></div>

      <div className="training-container">

        {/* HEADER */}
        <motion.div
          className="training-heading"
          initial={{
            opacity: 0,
            y: 50,
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
          }}
        >
          <span className="section-tag">
            TRAINING & LEARNING
          </span>

          <h2>
            Learning <span>Journey</span>
          </h2>

          <p>
            Continuous learning and practical exposure that support
            my journey toward becoming a professional full stack developer.
          </p>
        </motion.div>

        {/* TRAINING GRID */}
        <div className="training-grid">

          {trainingData.map((item, index) => (
            <motion.article
              key={item.id}
              className={`training-card ${
                item.active ? "training-card-active" : ""
              }`}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
            >

              {/* TOP */}
              <div className="training-card-top">

                <span className="training-number">
                  {item.id}
                </span>

                <span className="training-type">
                  {item.type}
                </span>

              </div>

              {/* ACTIVE STATUS */}
              {item.active && (
                <div className="training-active-status">
                  <span className="training-status-dot"></span>
                  CURRENTLY LEARNING
                </div>
              )}

              {/* TITLE */}
              <h3>
                {item.title}
              </h3>

              {/* ORGANIZATION */}
              <h4>
                {item.organization}
              </h4>

              {/* PERIOD */}
              <div className="training-period">
                {item.period}
              </div>

              {/* DESCRIPTION */}
              <p className="training-description">
                {item.description}
              </p>

              {/* SKILLS */}
              <div className="training-skills">

                {item.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

              {/* BOTTOM LINE */}
              <div className="training-card-bottom">
                <span>
                  {item.active
                    ? "BUILDING SKILLS"
                    : "PRACTICAL EXPOSURE"}
                </span>

                <span className="training-arrow">
                  ↗
                </span>
              </div>

            </motion.article>
          ))}

        </div>

        {/* LEARNING MESSAGE */}
        <motion.div
          className="training-message"
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="training-message-icon">
            ✦
          </div>

          <div>
            <span>
              CURRENT FOCUS
            </span>

            <strong>
              Building real-world applications with React,
              Django & MySQL
            </strong>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Training;