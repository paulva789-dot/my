import { type ChangeEvent, type FormEvent, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaBriefcase,
  FaLaptopCode,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PageTransition>
      <Navbar />

      <section className="page-banner">
        <span className="contact-pill">Open for opportunities</span>
        <h1>Let’s create something memorable.</h1>
        <p>
          From polished landing pages to meaningful digital experiences, I’d love
          to hear about your next idea.
        </p>
      </section>

      <section className="contact-hero">
        <div className="contact-hero-copy">
          <h2>Ready to start your next project?</h2>
          <p>
            Share a little about your idea and I’ll help shape it into a clear,
            thoughtful experience with a strong visual direction.
          </p>
          <div className="contact-hero-actions">
            <a className="btn-primary" href="mailto:pauleloundou@icloud.com">
              Say hello
            </a>
            <a
              className="btn-secondary"
              href="mailto:pauleloundou@icloud.com?subject=Hello&body=Hello,%20How%20can%20we%20be%20of%20Service%20to%20you.%20Thanks%20For%20Getting%20in%20Contact"
            >
              Quick hello
            </a>
            <a className="btn-secondary" href="#contact-form">
              Send a message
            </a>
          </div>
        </div>
 
        <div className="contact-hero-card">
          <h3>What I can help with</h3>
          <ul>
            <li>Modern portfolio and product websites</li>
            <li>Frontend UI development and interaction design</li>
            <li>Creative landing pages and digital experiences</li>
          </ul>
          <p className="hero-note">Usually replies within 24 hours.</p>
          <p className="hero-note hero-quick-response">
            Hello, How can we be of Service to you. Thanks For Getting in Contact
          </p>
        </div>
      </section>

      <section className="contact-page">
        <div className="contact-panel contact-info">
          <div className="contact-panel-heading">
            <h2>Let’s connect</h2>
            <p>
              I’m available for collaborations, internships, freelancing, and
              thoughtful team projects.
            </p>
          </div>

          <div className="contact-card">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>pauleloundou@icloud.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt />
            <div>
              <h3>Location</h3>
              <p>Buea, Cameroon</p>
            </div>
          </div>

          <div className="contact-card">
            <FaGithub />
            <div>
              <h3>GitHub</h3>
              <p>github.com/PaulEloundou</p>
            </div>
          </div>

          <div className="contact-card">
            <FaLinkedin />
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/your-profile</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/PaulEloundou" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:pauleloundou@icloud.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="contact-panel contact-form-card" id="contact-form">
          <div className="contact-panel-heading">
            <h2>Drop me a note</h2>
            <p>Your idea, question, or opportunity is always welcome.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <textarea
                name="message"
                rows={8}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-primary contact-submit">
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="availability">
        <h2>Available For</h2>
        <div className="achievement-grid">
          <div className="achievement-card">
            <FaBriefcase />
            <h3>Internships</h3>
          </div>
          <div className="achievement-card">
            <FaLaptopCode />
            <h3>Freelancing</h3>
          </div>
          <div className="achievement-card">
            <FaUsers />
            <h3>Team Projects</h3>
          </div>
          <div className="achievement-card">
            <FaGlobe />
            <h3>Remote Work</h3>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}

export default Contact;