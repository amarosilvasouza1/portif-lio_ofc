import React, { useState } from 'react';
import { translations } from '../data/translations';
import { LanguageContext } from './createLanguageContext';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
