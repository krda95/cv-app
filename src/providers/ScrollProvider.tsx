import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface ScrollContextType {
  onScrollToEnd: (callback: () => void) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [scrollCallback, setScrollCallback] = useState<() => void>(() => {});

  const onScrollToEnd = (callback: () => void) => {
    // setScrollCallback(() => callback);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight + 50) {
        if (scrollCallback) scrollCallback();
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollCallback]);

  return (
    <ScrollContext.Provider value={{ onScrollToEnd }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollToEnd = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollToEnd must be used within a ScrollProvider');
  }
  return context.onScrollToEnd;
};
