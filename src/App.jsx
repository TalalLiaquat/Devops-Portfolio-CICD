import React, { useState, useEffect } from 'react';
import './styles.css';

const skillsData = [
  { name: 'AWS', icon: 'fab fa-aws' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Kubernetes', icon: 'fas fa-cube' },
  { name: 'Jenkins', icon: 'fas fa-cogs' },
  { name: 'Terraform', icon: 'fas fa-layer-group' },
  { name: 'Ansible', icon: 'fas fa-chess-rook' },
  { name: 'Linux', icon: 'fab fa-linux' },
  { name: 'Git', icon: 'fab fa-git-alt' },
];

const projectsData = [
  {
    title: 'AWS Static Website Hosting',
    description: 'Built a secure static website with Amazon S3, CloudFront, and HTTPS delivery.',
    icon: 'fas fa-cloud',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Serverless OTP System',
    description: 'Implemented an OTP verification flow using AWS Lambda and Amazon SES.',
    icon: 'fas fa-lock',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
  },
  {
    title: 'CI/CD Pipeline',
    description: 'Automated workflows using GitHub Actions for fast, reliable deployments.',
    icon: 'fas fa-code-branch',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
];

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">DevOps Portfolio</div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Professional DevOps Presence</p>
            <h1>Aspiring DevOps Engineer</h1>
            <p className="hero-text">
              I design scalable infrastructure, automate pipelines, and deploy resilient cloud solutions with modern DevOps practices.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects"><i className="fas fa-rocket"></i> View Projects</a>
              <a className="button ghost" href="#contact"><i className="fas fa-envelope"></i> Get in Touch</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <i className="fas fa-chart-line hero-icon"></i>
              <h2>Key Focus Areas</h2>
              <ul>
                <li>Cloud Infrastructure</li>
                <li>Automation & CI/CD</li>
                <li>Security & Reliability</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section-block">
          <div className="section-head">
            <span>Skills</span>
            <h2>Technical toolset</h2>
          </div>
          <div className="skills-grid">
            {skillsData.map((skill) => (
              <div key={skill.name} className="skill-pill">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block section-alt">
          <div className="section-head">
            <span>Projects</span>
            <h2>Recent implementations</h2>
          </div>
          <div className="project-grid">
            {projectsData.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <i className={project.icon}></i>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-tag">Featured</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a className="project-link" href="#contact">Discuss this project <i className="fas fa-arrow-right"></i></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block contact-block">
          <div className="section-head">
            <span>Contact</span>
            <h2>Let’s collaborate</h2>
          </div>
          <div className="contact-panel">
            <div>
              <p><i className="fas fa-envelope"></i> Email</p>
              <a href="mailto:hello@devopsportfolio.com">hello@devopsportfolio.com</a>
            </div>
            <div>
              <p><i className="fab fa-linkedin"></i> LinkedIn</p>
              <a className="button secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i> View Profile
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        <p>© 2026 DevOps Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
