import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const swichLanguage = (lang) => {
    setLanguage(lang);
  };

  return <LanguageContext.Provider value={{ language, swichLanguage }}>{children}</LanguageContext.Provider>;
};
