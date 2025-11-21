import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const Skills = () => {
  const { t } = useLanguage();

  const techSkills = [
    "TypeScript", "JavaScript", "React.js", "Node.js",
    "HTML", "CSS", "SCSS", "Python", "Java", "Spring Boot", "LLM",
    "PostgreSQL", "MySQL", "Prisma", "Firebase"
  ];

  const softSkills = [
    "Problem-solving", "Communication", "Time Management",
    "Continuous Learning", "TeamWorking", "Collaboration",
    "Self-Motivation", "Flexibility"
  ];

  return (
    <section id="skills" className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>{t.skills.title}</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Tech Skills */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>{t.skills.tech}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {techSkills.map((skill, index) => (
              <span key={index} style={{
                background: 'rgba(56, 189, 248, 0.1)',
                color: 'var(--primary-color)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>{t.skills.soft}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {softSkills.map((skill, index) => (
              <span key={index} style={{
                background: 'rgba(192, 132, 252, 0.1)',
                color: 'var(--accent-color)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                border: '1px solid rgba(192, 132, 252, 0.2)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
