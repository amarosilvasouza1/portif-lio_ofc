import { useContext } from 'react';
import { LanguageContext } from './createLanguageContext';

export const useLanguage = () => useContext(LanguageContext);
