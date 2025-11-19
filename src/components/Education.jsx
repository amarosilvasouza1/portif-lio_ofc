import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>{t.education.title}</h2>
      
      <div className="glass-panel" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Kenzie Academy Brasil</h3>
            <p style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>{t.education.course}</p>
          </div>
          <span style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: '5px 15px', 
            borderRadius: '15px',
            fontSize: '0.9rem',
            color: '#cbd5e1'
          }}>
            Jun/2023 - Jul/2024
          </span>
        </div>
        <p style={{ marginTop: '1rem', color: '#94a3b8' }}>
          {t.education.desc}
        </p>
      </div>
    </section>
  );
};

export default Education;
