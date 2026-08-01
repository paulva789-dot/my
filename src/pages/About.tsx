import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import profile from "../assets/profile.jpg";
import { portfolioData } from "../data/portfoliodata";

function About() {
  return (
    <PageTransition>
      <Navbar />

      <section className="about">
        <div className="about-image">
          <img src={profile} alt={portfolioData.name} />
        </div>

        <div className="about-content">
          <h1>About Me</h1>
          <h3>{portfolioData.title} & Software Developer</h3>

          <p>{portfolioData.aboutPreview}</p>

          <p>
            I enjoy turning ideas into usable products through thoughtful code,
            strong UI decisions, and a focus on solving real-world problems.
          </p>

          <div className="about-info">
            <div>
              <strong>Name:</strong>
              <span> {portfolioData.name}</span>
            </div>

            <div>
              <strong>Email:</strong>
              <span> {portfolioData.email}</span>
            </div>

            <div>
              <strong>Focus:</strong>
              <span> Web, Mobile, and Software Systems</span>
            </div>

            <div>
              <strong>Location:</strong>
              <span> Buea, Cameroon</span>
            </div>
          </div>

          <div className="about-actions">
            <a href={portfolioData.cvPath} className="btn-primary" download>
              Download CV
            </a>
            <a
              href="/Paul_Eloundou_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View CV
            </a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h2>10+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h2>8+</h2>
          <p>Technologies Used</p>
        </div>

        <div className="stat-card">
          <h2>2+</h2>
          <p>Years Learning</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Commitment</p>
        </div>
      </section>

      <section className="page">
        <h2>Career Goals</h2>
        <p className="section-text">
          I aim to grow into a professional software engineer who builds polished
          applications, contributes to meaningful projects, and keeps learning in
          areas like full-stack development, mobile engineering, and product design.
        </p>

        <h2>Career Experience</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>
              Built responsive interfaces and interactive web experiences using
              React, TypeScript, and modern design systems.
            </p>
          </div>

          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>
              Developed cross-platform mobile solutions with Flutter, focusing on
              usability, performance, and attractive user flows.
            </p>
          </div>

          <div className="service-card">
            <h3>Software Projects</h3>
            <p>
              Worked on practical projects involving databases, UI, app structure,
              and problem-solving from concept to implementation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}

export default About;