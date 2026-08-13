import type { IconType } from "react-icons";

type SkillProps = {
  name: string;
  level?: number;
  icon?: IconType;
  description?: string;
};

function SkillCard({ name, level, icon: Icon, description }: SkillProps) {
  return (
    <div className="skill-card">
      {Icon ? <Icon className="skill-icon" /> : null}

      <div className="skill-title">
        <h3>{name}</h3>
        {level !== undefined ? <span>{level}%</span> : null}
      </div>

      {description ? <p>{description}</p> : null}

      {level !== undefined ? (
        <div className="progress">
          <div className="progress-bar" style={{ width: `${level}%` }}></div>
        </div>
      ) : null}
    </div>
  );
}

export default SkillCard;