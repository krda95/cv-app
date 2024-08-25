import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AvailableLanguages } from '../components/LanguageSwitcher';

interface LanguageContextProps {
  currentLanguage: AvailableLanguages['language'];
  setLanguage: (language: AvailableLanguages['language']) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<AvailableLanguages['language']>(
    (localStorage.getItem('language') as AvailableLanguages['language']) || 'en'
  );

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (language: AvailableLanguages['language']) => {
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};