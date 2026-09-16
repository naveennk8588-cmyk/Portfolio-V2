import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    id: "01",
    title: "Naveen Kumar – Personal Portfolio",
    category: "Portfolio",
    description:
      "A professional personal portfolio website showcasing skills, projects, education, experience and contact information with a modern responsive interface.",
    tech: ["HTML5", "CSS3", "JavaScript", "AOS", "Responsive"],
    image: "/projects/personal-portfolio.png",

    // YOUR ACTUAL LINKS
    github: "https://naveennk8588-cmyk.github.io/Python-Trainee/",
    demo: "https://naveennk8588-cmyk.github.io/Python-Trainee/Portfolio/index.html",
  },

  {
    id: "02",
    title: "Chef's Table – Recipe & Food Blog",
    category: "Web Development",
    description:
      "A modern Indian food blog featuring recipes, food categories, recipe details, cooking information, ratings and interactive user interface components.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    image: "/projects/food-blog.png",

    // YOUR ACTUAL LINKS
    github: "https://naveennk8588-cmyk.github.io/Python-Trainee/",
    demo: "https://naveennk8588-cmyk.github.io/Python-Trainee/Portfolio/Chef's-Table.html",
  },

  {
    id: "03",
    title: "BluePeak Infra & Constructions",
    category: "Business Website",
    description:
      "A modern construction company website with service showcases, project filtering, consultation booking, VR building visualization, testimonials and an AI assistant.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git & GitHub",
      "Responsive",
    ],
    image: "/projects/bluepeak.png",

    // VERIFIED LIVE DEMO
    github: "https://naveennk8588-cmyk.github.io/Python-Trainee/",
    demo:
      "https://naveennk8588-cmyk.github.io/Python-Trainee/BluePeak-Website-Final/index.html",
  },

  {
    id: "04",
    title: "Vetri IT Solutions",
    category: "React Application",
    description:
      "A modern and responsive IT solutions website built with React, featuring a professional interface, responsive design and interactive components.",
    tech: ["React", "JavaScript", "CSS3", "Responsive", "Vercel"],
    image: "/projects/vetri-it.png",

    // VERIFIED LIVE DEMO
    github: "https://github.com/naveennk8588-cmyk/Vetri-IT-Solutions",
    demo: "https://vetri-it-solutions.vercel.app/",
  },

  {
    id: "05",
    title: "RetailFlow",
    category: "Full Stack Application",
    description:
      "A modern retail management application featuring products, customers, billing, invoices, search and responsive dashboard workflows.",
    tech: ["React", "Django", "REST API", "MySQL", "Vite"],
    image: "/projects/retailflow.png",

    // ADD YOUR ACTUAL LINKS
    github: "https://github.com/naveennk8588-cmyk/RetailFlow",
    demo: "https://retail-flow-3mzo.vercel.app/login",
  },

  {
    id: "06",
    title: "Portfolio V2",
    category: "React Portfolio",
    description:
      "An advanced React portfolio built with Framer Motion featuring interactive animations, modern glassmorphism, parallax effects and premium developer-focused UI.",
    tech: [
      "React",
      "Framer Motion",
      "JavaScript",
      "CSS3",
      "Vite",
    ],
    image: "/projects/portfolio-v2.png",

    // ADD YOUR GITHUB REPO AFTER PUSH
    github: "naveennk8588-cmyk/Portfolio-V2",

    // CURRENT LOCAL PROJECT
    demo: "https://portfolio-v2-1-yzsa.onrender.com/#home",
  },
];

function ProjectButton({ href, children, primary = false }) {
  const isAvailable = href && href !== "#";

  if (!isAvailable) {
    return (
      <span
        className={`project-btn ${
          primary ? "project-btn-primary" : ""
        } project-btn-disabled`}
      >
        {children}
        <span>↗</span>
      </span>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-btn ${
        primary ? "project-btn-primary" : ""
      }`}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      {children}
      <span>↗</span>
    </motion.a>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-bg"></div>

      <div className="projects-orb projects-orb-1"></div>
      <div className="projects-orb projects-orb-2"></div>

      <div className="projects-container">

        {/* SECTION HEADER */}
        <motion.div
          className="projects-heading"
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
            MY PROJECTS
          </span>

          <h2>
            Things I've{" "}
            <span>Built</span>
          </h2>

          <p>
            A collection of projects where creativity,
            development and problem-solving come together.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
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
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
            >

              {/* IMAGE */}
              <div className="project-image-wrap">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-image-gradient"></div>

                <div className="project-number">
                  {project.id}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

              </div>

              {/* CONTENT */}
              <div className="project-content">

                <div className="project-title-row">
                  <h3>{project.title}</h3>

                  <span className="project-index">
                    {project.id}
                  </span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="project-actions">

                  <ProjectButton
                    href={project.github}
                  >
                    GitHub
                  </ProjectButton>

                  <ProjectButton
                    href={project.demo}
                    primary
                  >
                    Live Demo
                  </ProjectButton>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* BOTTOM */}
        <motion.div
          className="projects-bottom"
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
        >
          <div className="projects-bottom-line"></div>

          <span>
            MORE PROJECTS COMING SOON
          </span>

          <div className="projects-bottom-line"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;