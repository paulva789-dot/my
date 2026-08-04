import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { portfolioData } from "../data/portfoliodata";
import projects from "../data/projects";
import services from "../data/services";
import experience from "../data/experience";
import { skillSections } from "../data/skills";

function Home() {
  const featuredSkills = [
    ...skillSections.programming.slice(0, 4),
    ...skillSections.tools.slice(0, 4),
  ];

  return (
    <PageTransition>
      <Navbar />
      <Hero />

      <section id="about" className="home-section home-about">
        <div className="home-section-heading">
          <p className="section-tag">About</p>
          <h2>Building calm, modern, user-first experiences.</h2>
          <p>
            I create polished interfaces and thoughtful digital products that feel
            simple, clear, and memorable.
          </p>
        </div>

        <div className="home-card home-highlight-card">
          <h3>What I bring</h3>
          <p>{portfolioData.aboutPreview}</p>
          <div className="home-actions">
            <a href="/about" className="btn-primary">
              Read more
            </a>
            <a href="#contact" className="btn-secondary">
              Let’s talk
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="home-section">
        <div className="home-section-heading">
          <p className="section-tag">Skills</p>
          <h2>Core strengths and growing expertise.</h2>
        </div>

        <div className="home-grid">
          {featuredSkills.map((skill) => (
            <div className="home-card" key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.description ?? "Focused on practical, modern development."}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="home-section">
        <div className="home-section-heading">
          <p className="section-tag">Projects</p>
          <h2>Selected work that blends creativity with function.</h2>
        </div>

        <div className="home-grid">
          {projects.slice(0, 3).map((project) => (
            <article className="home-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="home-section">
        <div className="home-section-heading">
          <p className="section-tag">Experience</p>
          <h2>Growth through real projects and practical learning.</h2>
        </div>

        <div className="home-experience-list">
          {experience.slice(0, 3).map((item) => (
            <div className="home-card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="home-meta">{item.subtitle}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="home-section">
        <div className="home-section-heading">
          <p className="section-tag">Services</p>
          <h2>Support for elegant websites and digital products.</h2>
        </div>

        <div className="home-grid">
          {services.map((service) => (
            <div className="home-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="home-section home-contact">
        <div className="home-card home-contact-card">
          <p className="section-tag">Contact</p>
          <h2>Ready to bring your next idea to life?</h2>
          <p>
            Let’s discuss your project, your goals, and how I can help shape a
            strong experience for your audience.
          </p>
          <div className="home-actions">
            <Link to="/contact" className="btn-primary">
              Go to contact page
            </Link>
            <a href="mailto:pauleloundou@icloud.com" className="btn-secondary">
              Email me
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}

export default Home;