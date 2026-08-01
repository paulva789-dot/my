type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}: Project) {
  return (
    <div className="project-card">

      <img src={image} alt={title} />

      <div className="project-content">

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="tech-stack">

          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}

        </div>

        <div className="project-buttons">

          <a href={github} target="_blank" rel="noreferrer">

            GitHub

          </a>

          <a href={demo} target="_blank" rel="noreferrer">

            Live Demo

          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;