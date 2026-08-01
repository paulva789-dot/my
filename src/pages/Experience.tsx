import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import TimelineItem from "../components/TimelineItem";
import experience from "../data/experience";

function Experience() {
  return (
    <PageTransition>
      <Navbar />

      <section className="page">
        <h1>Experience & Education</h1>

        <p className="section-text">
          My academic journey and software development experience.
        </p>

        <div className="timeline">
          {experience.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}

export default Experience;