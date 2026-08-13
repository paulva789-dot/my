import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/useTheme";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [lastPathname, setLastPathname] = useState(location.pathname);

  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="navbar-shell">
      <button
        type="button"
        className={`top-left-hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <header className="navbar">
        <div className="logo">
          <h1>My Portfolio</h1>
        </div>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={closeMenu} />
          <div className="mobile-menu-panel">
            <nav aria-label="Mobile navigation">
              <ul className="mobile-nav-list">
                {navigationLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;