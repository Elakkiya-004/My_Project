import React from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      // image:"/projects/computer-program-coding-screen.jpg",
      image: "/computer-program-coding-screen.jpg",
      title: "Task Manager App",
      description:
        "A full-stack task manager with authentication and CRUD features.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/yourname/task-manager",
      website: "https://task-manager.vercel.app",
    },
    {
      image: "/computer-program-coding-screen.jpg",
      title: "Chat App",
      description: "Real-time chat app using WebSockets and MongoDB.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/yourname/chat-app",
      website: "https://chat-app.vercel.app",
    },
    {
      image: "/computer-program-coding-screen.jpg",
      title: "Portfolio Website",
      description: "Personal portfolio to showcase projects and skills.",
      tech: ["React", "CSS", "Framer Motion"],
      github: "https://github.com/yourname/portfolio",
      website: "https://yourportfolio.com",
    },
    {
      image: "/computer-program-coding-screen.jpg",
      title: "E-commerce App",
      description: "Full-stack e-commerce app with cart and payments.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourname/ecommerce",
      website: "https://ecommerce-app.vercel.app",
    },
    {
      image: "/computer-program-coding-screen.jpg",
      title: "Blog Platform",
      description: "Multi-user blog platform with rich text editor.",
      tech: ["React", "Express", "MongoDB"],
      github: "https://github.com/yourname/blog-platform",
      website: "https://blog-platform.vercel.app",
    },
    {
      image: "/computer-program-coding-screen.jpg",
      title: "Weather App",
      description: "Weather forecast app with location search.",
      tech: ["React", "OpenWeather API", "CSS"],
      github: "https://github.com/yourname/weather-app",
      website: "https://weather-app.vercel.app",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
