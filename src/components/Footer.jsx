import React from 'react';
import { useLanguage } from '../contexts/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{ 
      background: 'rgba(15, 23, 42, 0.8)', 
      padding: '2rem 0', 
      textAlign: 'center',
      marginTop: '4rem',
      borderTop: '1px solid var(--glass-border)'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
          <a href="https://www.linkedin.com/in/amaro-silva-200614278/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/amarosilvasouza1" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:amarosilvasouza1@gmail.com">Email</a>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Amaro Silva Souza. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
