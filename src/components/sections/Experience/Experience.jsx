import { motion } from "framer-motion";
import "./Experience.css";

const experienceData = [
  {
    id: "01",
    role: "Field Officer (FOS)",
    company: "State Bank Operations Support Services Pvt Ltd",
    period: "Nov 2025 – May 2026",
    type: "Professional Experience",
    description:
      "Worked in field operations with responsibility for customer-related activities, operational support and process coordination.",
    highlights: [
      "Field Operations",
      "Customer Coordination",
      "Process Support",
    ],
  },
  {
    id: "02",
    role: "Freelance Mathematics Tutor",
    company: "Focus Edumatics",
    period: "Sep 2024 – Feb 2025",
    type: "Freelance",
    description:
      "Provided mathematics tutoring support through freelance sessions, focusing on student understanding, problem solving and concept clarity.",
    highlights: [
      "Mathematics Tutoring",
      "Problem Solving",
      "Student Support",
    ],
  },
  {
    id: "03",
    role: "Executive Tutor",
    company: "Focus Edumatics",
    period: "Jan 2022 – Aug 2024",
    type: "Professional Experience",
    description:
      "Worked as an Executive Tutor, supporting students in mathematics and helping them develop strong understanding of mathematical concepts.",
    highlights: [
      "Mathematics",
      "Concept Explanation",
      "Student Mentoring",
    ],
  },
  {
    id: "04",
    role: "Assembly Department",
    company: "Nokia Solutions and Networks (NSN)",
    period: "Jan 2015 – 2016",
    type: "Industrial Experience",
    description:
      "Worked in the assembly department and gained practical experience in industrial operations, production processes and workplace coordination.",
    highlights: [
      "Assembly Operations",
      "Production Process",
      "Team Coordination",
    ],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      {/* Background */}
      <div className="experience-bg"></div>

      <div className="experience-orb experience-orb-1"></div>
      <div className="experience-orb experience-orb-2"></div>

      <div className="experience-container">

        {/* HEADER */}
        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">
            MY EXPERIENCE
          </span>

          <h2>
            Professional <span>Journey</span>
          </h2>

          <p>
            A journey across different roles that strengthened my
            technical, problem-solving and communication skills.
          </p>
        </motion.div>

        {/* EXPERIENCE TIMELINE */}
        <div className="experience-timeline">

          <div className="experience-line"></div>

          {experienceData.map((item, index) => (
            <motion.div
              className={`experience-item ${
                index % 2 === 0
                  ? "experience-left"
                  : "experience-right"
              }`}
              key={item.id}
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
            >

              {/* CARD */}
              <div className="experience-card">

                <div className="experience-card-top">

                  <span className="experience-type">
                    {item.type}
                  </span>

                  <span className="experience-number">
                    {item.id}
                  </span>

                </div>

                <h3>{item.role}</h3>

                <p className="experience-company">
                  {item.company}
                </p>

                <div className="experience-period">
                  {item.period}
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                {/* HIGHLIGHTS */}
                <div className="experience-highlights">
                  {item.highlights.map((highlight) => (
                    <span key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>

              </div>

              {/* TIMELINE DOT */}
              <motion.div
                className="experience-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.12,
                }}
              >
                <span></span>
              </motion.div>

              {/* PERIOD LABEL */}
              <div className="experience-side-period">
                {item.period}
              </div>

            </motion.div>
          ))}

        </div>

        {/* EXPERIENCE SUMMARY */}
        <motion.div
          className="experience-summary"
          initial={{
            opacity: 0,
            y: 30,
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
          <div className="experience-summary-item">
            <strong>04+</strong>
            <span>Roles</span>
          </div>

          <div className="experience-summary-line"></div>

          <div className="experience-summary-item">
            <strong>10+</strong>
            <span>Years Journey</span>
          </div>

          <div className="experience-summary-line"></div>

          <div className="experience-summary-item">
            <strong>∞</strong>
            <span>Learning Mindset</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;