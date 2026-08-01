import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import {
  FaBolt,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaLaptopCode,
} from "react-icons/fa";

function Services() {
  return (
    <PageTransition>
      <Navbar />

      <section className="page">
        <h1>My Services</h1>
        <p className="section-text">
          I help clients turn ideas into polished digital products through
          thoughtful web development, mobile apps, UI/UX design, and modern
          software engineering practices.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <FaCode size={28} />
            <h2>Web Development</h2>
            <p>
              I build responsive, modern websites with clean structure, strong
              user experience, and scalable front-end architecture.
            </p>
          </div>

          <div className="service-card">
            <FaMobileAlt size={28} />
            <h2>Mobile Development</h2>
            <p>
              I develop Flutter-based mobile applications focused on usability,
              performance, and smooth interaction across devices.
            </p>
          </div>

          <div className="service-card">
            <FaPaintBrush size={28} />
            <h2>UI / UX Design</h2>
            <p>
              I create elegant interfaces with intuitive layouts, strong visual
              hierarchy, and a user-centered experience.
            </p>
          </div>

          <div className="service-card">
            <FaLaptopCode size={28} />
            <h2>Software Engineering</h2>
            <p>
              I support software projects from planning to implementation with
              organized logic, maintainable code, and practical problem-solving.
            </p>
          </div>
        </div>

        <section className="page">
          <h2>Why Work With Me?</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaBolt size={28} />
              <h3>Fast Learner</h3>
              <p>I quickly adapt to new tools, frameworks, and challenges.</p>
            </div>

            <div className="service-card">
              <FaLightbulb size={28} />
              <h3>Creative</h3>
              <p>I focus on simple, modern, and user-friendly solutions.</p>
            </div>

            <div className="service-card">
              <FaUsers size={28} />
              <h3>Team Player</h3>
              <p>I collaborate well, communicate clearly, and support shared goals.</p>
            </div>

            <div className="service-card">
              <FaCheckCircle size={28} />
              <h3>Reliable</h3>
              <p>I deliver quality work with attention to detail and consistency.</p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </PageTransition>
  );
}

export default Services;