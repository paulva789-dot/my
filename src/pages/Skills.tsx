import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import SkillCard from "../components/SkillCard";
import { skillSections } from "../data/skills";

function Skills() {
  return (
    <PageTransition>
      <Navbar />

      <section className="page">
        <h1>Technical Skills</h1>
        <p className="section-text">
          I work across modern front-end, mobile, and software development tools
          to build practical digital products with strong performance and clean
          design.
        </p>

        <section className="skills-page">
          <h2>Programming Languages</h2>
          <div className="skills-grid">
            {skillSections.programming.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                name={skill.name}
                icon={skill.icon}
                description={skill.description}
              />
            ))}
          </div>
        </section>

        <section className="tools">
          <h2>Development Tools</h2>
          <div className="skills-grid">
            {skillSections.tools.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </section>

        <section className="progress-section">
          <h2>Skill Proficiency</h2>
          <div className="skills-grid">
            {skillSections.proficiency.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </section>

        <section className="learning">
          <h2>Currently Learning</h2>
          <div className="skills-grid">
            {skillSections.learning.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                name={skill.name}
                description={skill.description}
              />
            ))}
          </div>
        </section>
      </section>

      <Footer />
    </PageTransition>
  );
}

export default Skills;