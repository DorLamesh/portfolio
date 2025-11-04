import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Helmet } from 'react-helmet-async';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get('/api/portfolio');
        setPortfolioData(response.data);
      } catch (err) {
        setError('Failed to load portfolio data');
        console.error('Error fetching portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="btn-primary">
          Retry
        </button>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="error-screen">
        <h2>No Portfolio Data</h2>
        <p>No portfolio data available</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Helmet>
        <title>{portfolioData.hero?.name ? `${portfolioData.hero.name} | Portfolio` : 'Portfolio'}</title>
        <meta name="description" content="Modern Portfolio Website built with React" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Experience data={portfolioData.experience} />
      <Contact data={portfolioData.contact} />
    </div>
  );
}

function Navigation({ activeSection, onNavigate }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Portfolio</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => onNavigate('about')}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => onNavigate('skills')}>Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => onNavigate('projects')}>Projects</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => onNavigate('experience')}>Experience</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => onNavigate('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Hero({ data }) {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{data.name}</span>
          </h1>
          <h2 className="hero-subtitle">{data.title}</h2>
          <p className="hero-description">{data.description}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <div className="avatar">
              {data.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

function About({ data }) {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{data.description}</p>
            <div className="about-stats">
              {data.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ data }) {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(data).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ data }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {data.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.name}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="project-link primary" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ data }) {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {data.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">{exp.position}</h3>
                <h4 className="company">{exp.company}</h4>
                <span className="duration">{exp.duration}</span>
                <p className="description">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ data }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>{data.message}</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href={`tel:${data.phone}`}>{data.phone}</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>{data.location}</span>
              </div>
            </div>
            <div className="social-links">
              {data.linkedin && (
                <a href={data.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
              {data.github && (
                <a href={data.github} className="social-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {data.twitter && (
                <a href={data.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              )}
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

