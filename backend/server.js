const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Sample Portfolio data
const portfolioData = {
  hero: {
    name: "Dor Lamesh",
    title: "Backend Centric Developer & DevOps Engineer",
    description: "I create beautiful, functional, and user-centered digital experiences that solve real problems and bring ideas to life."
  },
  about: {
    description: "I'm a passionate DevOps engineer and backend developer with 3+ years of experience crafting digital solutions that make a difference. I specialize in creating seamless user experiences through clean code, intuitive design, and innovative thinking. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
    stats: [
      { number: "30+", label: "Projects Completed" },
      { number: "3+", label: "Years Experience" }
    ]
  },
  experience: [
    {
      position: "DevOps Engineer",
      company: "Inuitive",
      duration: "2022 - Present",
      location: "Ra'anana, Israel",
      description: "Lead development of enterprise web applications serving 100k+ users. Architected microservices infrastructure and implemented CI/CD pipelines.",
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Led a team of 5 developers in agile environment",
        "Implemented automated testing reducing bugs by 60%"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2014 - 2018",
      gpa: "3.8/4.0"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      year: "2018"
    }
  ],
  skills: {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    "Frontend": ["React", "Vue.js", "HTML5", "CSS3", "Sass", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "Django", "Spring Boot", "REST APIs", "GraphQL"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Jenkins"],
    "Tools": ["VS Code", "Postman", "Figma", "Jira", "Slack"]
  },
  projects: [
    {
      name: "Portfolio Website",
      description: "A responsive, modern portfolio website showcasing my work and skills. Built with React and styled with custom CSS animations and smooth scrolling effects.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/dorlamesh/portfolio",
      live: "https://dorlamesh.dev"
    },
    {
      name: "WeatherVue Dashboard",
      description: "An interactive weather dashboard with location-based forecasts, historical data visualization, and mobile-responsive design. Features beautiful data visualizations and PWA capabilities.",
      technologies: ["Vue.js", "Chart.js", "Weather API", "PWA", "Service Workers"],
      github: "https://github.com/dorlamesh/weathervue",
      live: "https://weathervue.dorlamesh.dev"
    }
  ],
  contact: {
    email: "lameshdor@gmail.com",
    phone: "+972 (050) 958-8334",
    location: "Tel-Aviv, Israel",
    message: "I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to bring your ideas to life!",
    linkedin: "https://linkedin.com/in/dor-lamesh-7a1539175",
    github: "https://github.com/dorlamesh",
    twitter: "https://twitter.com/dorlamesh"
  }
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running' });
});

app.get('/api/portfolio', (req, res) => {
  try {
    res.json(portfolioData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch portfolio data' });
  }
});

app.get('/api/portfolio/hero', (req, res) => {
  try {
    res.json(portfolioData.hero);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hero data' });
  }
});

app.get('/api/portfolio/about', (req, res) => {
  try {
    res.json(portfolioData.about);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch about data' });
  }
});

app.get('/api/portfolio/experience', (req, res) => {
  try {
    res.json(portfolioData.experience);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experience data' });
  }
});

app.get('/api/portfolio/skills', (req, res) => {
  try {
    res.json(portfolioData.skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills data' });
  }
});

app.get('/api/portfolio/projects', (req, res) => {
  try {
    res.json(portfolioData.projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects data' });
  }
});

app.get('/api/portfolio/contact', (req, res) => {
  try {
    res.json(portfolioData.contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact data' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio API server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
