import { motion } from "framer-motion";
import "./Education.css";

const educationData = [
  {
    id: "01",
    degree: "B.E. Electrical & Electronics Engineering",
    institution: "Nandha College of Technology, Erode",
    year: "2016 – 2019",
    percentage: "66%",
    type: "Bachelor's Degree",
  },
  {
    id: "02",
    degree: "Diploma – Electrical & Electronics Engineering",
    institution: "Sri Raghavendra Polytechnic College, Namakkal",
    year: "2014 – 2015",
    percentage: "84%",
    type: "Diploma",
  },
  {
    id: "03",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Higher Secondary School, Velliraveli",
    year: "2012 – 2013",
    percentage: "60%",
    type: "Higher Secondary",
  },
  {
    id: "04",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Government Higher Secondary School, Velliraveli",
    year: "2010 – 2011",
    percentage: "64%",
    type: "Secondary School",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-bg"></div>

      <div className="education-orb education-orb-1"></div>
      <div className="education-orb education-orb-2"></div>

      <div className="education-container">

        {/* HEADER */}
        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">
            MY EDUCATION
          </span>

          <h2>
            Academic <span>Journey</span>
          </h2>

          <p>
            My educational journey has given me a strong technical
            foundation and helped shape my problem-solving mindset.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="education-timeline">

          <div className="education-line"></div>

          {educationData.map((item, index) => (
            <motion.div
              className={`education-item ${
                index % 2 === 0
                  ? "education-left"
                  : "education-right"
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >

              {/* CONTENT CARD */}
              <div className="education-card">

                <div className="education-card-top">
                  <span className="education-type">
                    {item.type}
                  </span>

                  <span className="education-number">
                    {item.id}
                  </span>
                </div>

                <h3>{item.degree}</h3>

                <p className="education-institution">
                  {item.institution}
                </p>

                <div className="education-meta">
                  <span>{item.year}</span>
                  <span>{item.percentage}</span>
                </div>

                {/* PERCENTAGE BAR */}
                <div className="education-progress">

                  <div className="education-progress-label">
                    <span>Academic Performance</span>
                    <span>{item.percentage}</span>
                  </div>

                  <div className="education-progress-track">
                    <motion.div
                      className="education-progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: item.percentage,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>

                </div>

              </div>

              {/* TIMELINE DOT */}
              <motion.div
                className="education-dot"
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15,
                }}
              >
                <span></span>
              </motion.div>

              {/* YEAR */}
              <div className="education-year">
                {item.year}
              </div>

            </motion.div>
          ))}
        </div>

        {/* BOTTOM SUMMARY */}
        <motion.div
          className="education-summary"
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
          <div className="education-summary-item">
            <strong>4</strong>
            <span>Qualifications</span>
          </div>

          <div className="education-summary-line"></div>

          <div className="education-summary-item">
            <strong>84%</strong>
            <span>Highest Score</span>
          </div>

          <div className="education-summary-line"></div>

          <div className="education-summary-item">
            <strong>2010–2019</strong>
            <span>Academic Journey</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;