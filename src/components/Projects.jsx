import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Infinit",
      description: t.projects.infinit,
      tech: ["React.js", "Node.js", "Socket.io", "WebRTC"],
      link: "https://infinit-ofc.vercel.app"
    },
    {
      title: "Hamburgueria",
      description: t.projects.hamburgueria,
      tech: ["React.js", "HTML", "SCSS"],
      link: "https://react-entrega-s3-template-hamburgueria-amaro-silva.vercel.app/"
    },
    {
      title: "Generic Course",
      description: t.projects.generic,
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://kenzie-academy-brasil-developers.github.io/m2-site-instituciona-generico_AmaroSilva/"
    },
    {
      title: "Crud de Produto",
      description: t.projects.crud,
      tech: ["JavaScript", "TypeScript", "Node.js"],
      link: "https://github.com/Kenzie-Academy-Brasil-Developers/m4-template-entrega1_Amao-silva"
    },
    {
      title: "Adoção",
      description: t.projects.adopcao,
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://ado-ao.vercel.app/"
    },
    {
      title: "BookVerse",
      description: t.projects.bookverse,
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Prisma", "MySQL", "Gemini AI"],
      link: "https://bookverse-red.vercel.app"
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="projects-title">{t.projects.title}</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel project-card" 
          >
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
