// context/LanguageContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/types/enum";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(Language.EN);

  // Detect the user's preferred language
  useEffect(() => {
    // Extract 'en' from 'en-US'
    const preferredLanguage = navigator.language.split("-")[0];
    if (Object.values(Language).includes(preferredLanguage as Language)) {
      setLanguage(preferredLanguage as Language);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
