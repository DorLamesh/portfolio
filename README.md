# Portfolio Website

A modern, responsive portfolio website built with React frontend and Node.js backend, containerized with Docker Compose. Showcase your work, skills, and experience with a beautiful, professional online presence.

## Features

- **Modern Design**: Beautiful, responsive design with gradient backgrounds and smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Personal story with statistics and achievements
- **Skills Showcase**: Organized skill categories with interactive tags
- **Project Gallery**: Featured projects with live demos and GitHub links
- **Experience Timeline**: Professional work history with detailed descriptions
- **Contact Form**: Interactive contact form with social media links
- **Mobile Responsive**: Optimized for all device sizes
- **Dockerized**: Easy deployment with Docker Compose
- **RESTful API**: Well-structured backend API with multiple endpoints

## Tech Stack

### Frontend
- React 18
- Modern CSS with Flexbox/Grid
- Axios for API calls
- Responsive design

### Backend
- Node.js
- Express.js
- CORS enabled
- Helmet for security
- Morgan for logging

### DevOps
- Docker
- Docker Compose
- Multi-container setup

## Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js (Portfolio components)
│   │   ├── App.css (Modern styling)
│   │   └── index.js
│   ├── Dockerfile
│   └── package.json
├── backend/
│   ├── server.js (Portfolio API)
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Quick Start

1. **Clone and navigate to the project directory**
   ```bash
   cd portfolio
   ```

2. **Start the application with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - API Health Check: http://localhost:3001/api/health

## Available Scripts

- `npm run dev` - Start development environment
- `npm run build` - Build Docker images
- `npm run start` - Start containers
- `npm run stop` - Stop containers

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/portfolio` - Complete portfolio data
- `GET /api/portfolio/hero` - Hero section data
- `GET /api/portfolio/about` - About section data
- `GET /api/portfolio/experience` - Work experience
- `GET /api/portfolio/skills` - Skills and technologies
- `GET /api/portfolio/projects` - Projects portfolio
- `GET /api/portfolio/contact` - Contact information

## Customization

### Updating Portfolio Data
Edit the `portfolioData` object in `backend/server.js` to customize the portfolio content:
- Update personal information in the `hero` section
- Modify the `about` section with your story and statistics
- Add your projects with descriptions, technologies, and links
- Update work experience and skills
- Customize contact information and social links

### Styling
Modify the CSS files in `frontend/src/` to change the appearance:
- `App.css` - Main component styles with modern animations
- `index.css` - Global styles

### Adding New Sections
1. Add new data to the `portfolioData` object in `backend/server.js`
2. Create a new React component in `frontend/src/App.js`
3. Add the component to the main App component
4. Update the navigation menu

## Development

### Running Individual Services

**Backend only:**
```bash
cd backend
npm install
npm start
```

**Frontend only:**
```bash
cd frontend
npm install
npm start
```

### Docker Commands

```bash
# Build and start all services
docker-compose up --build

# Start services in background
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild specific service
docker-compose up --build frontend
```

## Production Deployment

For production deployment, consider:

1. **Environment Variables**: Set production environment variables
2. **SSL/HTTPS**: Configure SSL certificates
3. **Reverse Proxy**: Use Nginx or similar for production
4. **Database**: Add persistent database if needed
5. **Monitoring**: Add logging and monitoring solutions

## License

MIT License - feel free to use this project for your own CV or as a starting point for other applications.
