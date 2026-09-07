import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Training", id: "training" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // --------------------------------------------------
    // NORMALIZE OLD / WRONG URL
    // Example:
    // /resume.pdf#home  ->  /#home
    // /something#skills -> /#skills
    // --------------------------------------------------

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    if (currentPath !== "/") {
      const validHash = currentHash || "#home";

      window.history.replaceState(
        null,
        "",
        `/${validHash}`
      );
    } else if (!currentHash) {
      window.history.replaceState(
        null,
        "",
        "/#home"
      );
    }

    // --------------------------------------------------
    // SCROLL HANDLER
    // --------------------------------------------------

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Navbar background
      setScrolled(scrollY > 30);

      // Scroll progress
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        documentHeight > 0
          ? (scrollY / documentHeight) * 100
          : 0;

      setScrollProgress(progress);

      // Get sections
      const sections = navItems
        .map((item) =>
          document.getElementById(item.id)
        )
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop =
          section.offsetTop - 180;

        if (scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      // Active navbar item
      setActiveSection(currentSection);

      // Update URL without page reload
      const expectedHash =
        `#${currentSection}`;

      if (
        window.location.pathname === "/" &&
        window.location.hash !== expectedHash
      ) {
        window.history.replaceState(
          null,
          "",
          `/${expectedHash}`
        );
      }
    };

    // Initial check
    handleScroll();

    // Listen to scroll
    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // --------------------------------------------------
  // NAVIGATION
  // --------------------------------------------------

  const handleNavigation = (id) => {
    const section =
      document.getElementById(id);

    if (!section) return;

    // Update URL
    window.history.pushState(
      null,
      "",
      `/#${id}`
    );

    // Smooth scroll
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Update active item immediately
    setActiveSection(id);

    // Close mobile menu
    setMenuOpen(false);
  };

  // --------------------------------------------------
  // LOGO
  // --------------------------------------------------

  return (
    <>
      {/* =========================================
          SCROLL PROGRESS
      ========================================= */}

      <motion.div
        className="navbar-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
      />


      {/* =========================================
          NAVBAR
      ========================================= */}

      <header
        className={`navbar ${
          scrolled
            ? "navbar-scrolled"
            : ""
        }`}
      >

        <div className="navbar-container">


          {/* =====================================
              LOGO
          ===================================== */}

          <motion.button
            type="button"
            className="navbar-logo"
            onClick={() =>
              handleNavigation("home")
            }
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            aria-label="Go to home"
          >
            <span>NK</span>
          </motion.button>


          {/* =====================================
              DESKTOP NAV
          ===================================== */}

          <nav className="navbar-links">

            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`navbar-link ${
                  activeSection === item.id
                    ? "navbar-link-active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigation(item.id)
                }
              >

                {item.name}

                {activeSection ===
                  item.id && (
                  <motion.span
                    className="navbar-active-line"
                    layoutId="navbar-active-line"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}

              </button>
            ))}

          </nav>


          {/* =====================================
              DESKTOP CTA
          ===================================== */}

          <motion.button
            type="button"
            className="navbar-cta"
            onClick={() =>
              handleNavigation("contact")
            }
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Let's Talk

            <span>↗</span>
          </motion.button>


          {/* =====================================
              MOBILE MENU BUTTON
          ===================================== */}

          <button
            type="button"
            className={`navbar-menu ${
              menuOpen
                ? "navbar-menu-open"
                : ""
            }`}
            onClick={() =>
              setMenuOpen(
                (prev) => !prev
              )
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>


        {/* =====================================
            MOBILE MENU
        ===================================== */}

        <AnimatePresence>

          {menuOpen && (
            <motion.div
              className="navbar-mobile"
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.25,
              }}
            >

              <div className="navbar-mobile-inner">

                {navItems.map(
                  (item, index) => (
                    <motion.button
                      type="button"
                      key={item.id}
                      className={`navbar-mobile-link ${
                        activeSection ===
                        item.id
                          ? "navbar-mobile-link-active"
                          : ""
                      }`}
                      onClick={() =>
                        handleNavigation(
                          item.id
                        )
                      }
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.04,
                      }}
                    >

                      <span>
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      {item.name}

                      {activeSection ===
                        item.id && (
                        <i></i>
                      )}

                    </motion.button>
                  )
                )}


                {/* MOBILE CTA */}

                <motion.button
                  type="button"
                  className="navbar-mobile-cta"
                  onClick={() =>
                    handleNavigation(
                      "contact"
                    )
                  }
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  Let's Talk

                  <span>↗</span>
                </motion.button>

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </header>
    </>
  );
}

export default Navbar;