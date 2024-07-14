import React, { useEffect } from 'react';
import { useMantineTheme } from '@mantine/core';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useMantineTheme();

  useEffect(() => {
    document.documentElement.style.setProperty('--mantine-color-blue-1', theme.colors.blue[1]);
    document.documentElement.style.setProperty('--mantine-color-blue-7', theme.colors.blue[7]);
    document.documentElement.style.setProperty('--mantine-color-dark-4', theme.colors.dark[4]);
    document.documentElement.style.setProperty('--mantine-color-gray-3', theme.colors.gray[3]);
    document.documentElement.style.setProperty('--mantine-color-gray-5', theme.colors.gray[5]);
    document.documentElement.style.setProperty('--mantine-color-gray-7', theme.colors.gray[7]);
    document.documentElement.style.setProperty('--mantine-spacing-md', theme.spacing.md);
    document.documentElement.style.setProperty('--mantine-radius-sm', theme.radius.sm);
    document.documentElement.style.setProperty('--mantine-font-size-sm', theme.fontSizes.sm);
    document.documentElement.style.setProperty('--brand-orange', '#ff9900');
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;