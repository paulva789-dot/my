type SkillProps = {
  name: string;
  level?: number;
  iconClassName?: string;
  description?: string;
};

function SkillCard({ name, level, iconClassName, description }: SkillProps) {
  return (
    <div className="skill-card">
      {iconClassName ? <i className={iconClassName}></i> : null}

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