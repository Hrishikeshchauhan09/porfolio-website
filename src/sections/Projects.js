import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Projects.css";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Online Perfume Store",
      description:
        "Built a fully functional online perfume shopping platform where users can browse through various perfume collections, add items to cart, and complete purchases securely. The website includes user registration and login system, product categories with filtering options, detailed product pages, and a smooth checkout process. Implemented responsive design ensuring excellent user experience across all devices.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      image: "/images/project1.jpg",
      github: "https://github.com/username/perfume-store",
      live: "https://perfume-store-demo.netlify.app",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Kanban To-Do List Website",
      description:
        "Developed a modern task management tool using Kanban methodology to help users organize their work efficiently. Users can create multiple tasks, drag and drop them between different columns (To Do, In Progress, Completed), edit task details, and delete tasks. All data is stored locally in the browser, so tasks persist even after closing the application. The intuitive interface makes task management simple and enjoyable.",
      technologies: ["React", "CSS3", "Local Storage", "React DnD"],
      image: "/images/project2.jpg",
      github: "https://github.com/username/kanban-todo",
      live: "https://kanban-todo-demo.netlify.app",
      featured: true,
      category: "Frontend",
    },
    {
      id: 3,
      title: "Live Dictionary Website",
      description:
        "Created an intuitive dictionary application that provides instant word definitions and meanings. Users can search for any word and get comprehensive results including part of speech, pronunciation guide, multiple definitions, synonyms, antonyms, and usage examples. The app also features a search history tracker and the ability to save favorite words. Designed with a clean, user-friendly interface that works seamlessly on desktop and mobile devices.",
      technologies: ["React", "Dictionary API", "JavaScript", "CSS3"],
      image: "/images/project3.jpg",
      github: "https://github.com/username/live-dictionary",
      live: "https://live-dictionary-demo.netlify.app",
      featured: false,
      category: "Frontend",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div
          ref={ref}
          className={`projects-grid ${inView ? "fade-in" : ""}`}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">{project.title}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
