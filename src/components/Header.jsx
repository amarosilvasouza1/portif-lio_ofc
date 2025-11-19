import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const Header = () => {
  const { t, setLanguage, language } = useLanguage();

  const languages = [
    { code: 'pt', label: '🇧🇷 PT' },
    { code: 'en', label: '🇺🇸 EN' },
    { code: 'es', label: '🇪🇸 ES' },
    { code: 'ja', label: '🇯🇵 JA' }
  ];

  return (
    <header style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(15,23,42,0) 70%)',
        zIndex: -1,
        animation: 'pulse 4s infinite ease-in-out'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(192,132,252,0.1) 0%, rgba(15,23,42,0) 70%)',
        zIndex: -1,
        filter: 'blur(40px)'
      }}></div>

      <nav className="glass-panel" style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--primary-color)' }}>AMARO</div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#skills">{t.nav.skills}</a></li>
            <li><a href="#projects">{t.nav.projects}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>

          {/* Language Switcher */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                style={{
                  background: language === lang.code ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '5px 10px',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '180px', paddingBottom: '100px', textAlign: 'center' }}>
        <h1 style={{ 
          background: 'linear-gradient(to right, #fff, #94a3b8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          AMARO SILVA SOUZA
        </h1>
        <h2 style={{ 
          fontSize: '2rem', 
          color: 'var(--primary-color)',
          marginBottom: '2rem'
        }}>
          {t.hero.title}
        </h2>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1.5rem', 
          flexWrap: 'wrap',
          marginBottom: '3rem',
          color: '#94a3b8'
        }}>
          <span>📍 {t.hero.location}</span>
          <span>📧 amarosilvasouza1@gmail.com</span>
          <span>📱 +55 82 9 8768-0414</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="https://www.linkedin.com/in/amaro-silva-200614278/" target="_blank" rel="noopener noreferrer" 
             className="glass-panel"
             style={{ padding: '10px 20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
            LinkedIn
          </a>
          <a href="https://github.com/amarosilvasouza1" target="_blank" rel="noopener noreferrer"
             className="glass-panel"
             style={{ padding: '10px 20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
