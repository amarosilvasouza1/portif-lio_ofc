import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="container">
      <div className="glass-panel" style={{ padding: '3rem' }}>
        <h2>{t.about.title}</h2>
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {t.about.text}
        </p>
      </div>
    </section>
  );
};

export default About;
