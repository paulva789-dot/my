type TimelineProps = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

function TimelineItem({
  year,
  title,
  subtitle,
  description,
}: TimelineProps) {
  return (
    <div className="timeline-card">

      <div className="timeline-year">

        {year}

      </div>

      <div className="timeline-content">

        <h2>{title}</h2>

        <h4>{subtitle}</h4>

        <p>{description}</p>

      </div>

    </div>
  );
}

export default TimelineItem;