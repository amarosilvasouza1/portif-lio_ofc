import React from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Infinit",
      description: t.projects.infinit,
      tech: ["React.js", "Node.js", "Socket.io", "WebRTC"],
      link: "https://infinit-ofc.vercel.app",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Hamburgueria",
      description: t.projects.hamburgueria,
      tech: ["React.js", "HTML", "SCSS"],
      link: "https://react-entrega-s3-template-hamburgueria-amaro-silva.vercel.app/",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)"
    },
    {
      title: "Generic Course",
      description: t.projects.generic,
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://kenzie-academy-brasil-developers.github.io/m2-site-instituciona-generico_AmaroSilva/",
      gradient: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
    },
    {
      title: "Crud de Produto",
      description: t.projects.crud,
      tech: ["JavaScript", "TypeScript", "Node.js"],
      link: "https://github.com/Kenzie-Academy-Brasil-Developers/m4-template-entrega1_Amao-silva",
      gradient: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"
    },
    {
      title: "Adoção",
      description: t.projects.adopcao,
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://ado-ao.vercel.app/",
      gradient: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "BookVerse",
      description: t.projects.bookverse,
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Prisma", "MySQL", "Gemini AI"],
      link: "https://bookverse-red.vercel.app",
      gradient: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="container">
      <motion.h2 
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.projects.title}
      </motion.h2>
      
      <motion.div 
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel project-card"
            variants={item}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="project-image-placeholder" style={{ background: project.gradient }}>
              <div className="view-project-overlay">
                <span>View Project</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
