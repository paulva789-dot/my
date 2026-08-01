import profile from "../assets/profile.jpg";
import Typing from "./Typing";
import { portfolioData } from "../data/portfoliodata";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="welcome">👋 Welcome to my Portfolio</p>

        <h1>
          Hi, I&apos;m <span>{portfolioData.name}</span>
        </h1>

        <h3>
          <Typing />
        </h3>

        <p className="hero-text">{portfolioData.tagline}</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Hire Me
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt={portfolioData.name} />
      </div>
    </section>
  );
}

export default Hero;