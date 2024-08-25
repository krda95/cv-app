import { Autocomplete, Group, useMantineTheme, Tooltip } from '@mantine/core';
import { IconSearch, IconMoonFilled, IconSunFilled, IconLanguage } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher, { AvailableLanguages } from './LanguageSwitcher';
import { useLanguage } from '../providers/LanguageProvider';


const linksDict = {
  'en': [
    { link: '/', label: 'Home' },
    { link: '/education', label: 'Education' },
    { link: '/experience', label: 'Experience' },
    { link: '/hobbys', label: 'Hobbys' },
  ],
  'de': [
    { link: '/', label: 'Startseite' },
    { link: '/education', label: 'Ausbildung' },
    { link: '/experience', label: 'Erfahrung' },
    { link: '/hobbys', label: 'Hobby' },
  ],
  'pl': [
    { link: '/', label: 'Główna' },
    { link: '/education', label: 'Edukacja' },
    { link: '/experience', label: 'Doświadczenie' },
    { link: '/hobbys', label: 'Hobby' },
  ],
}

interface NavbarProps {
    toggleTheme: () => void;
    currentTheme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
  const location = useLocation();
  const { currentLanguage, setLanguage } = useLanguage();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);
  const theme = useMantineTheme();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
    }, [location]);

  const renderItems = (language: AvailableLanguages['language']) => {
    return linksDict[language].map((link) => (
      <Link
        key={link.label}
        to={link.link}
        className={classes.link}
        onClick={() => handleLinkClick(link.link)}
        style={{
          color: activeLink === link.link ? 'var(--brand-orange)' : theme.colors.gray[5],
        }}
      >
        {link.label}
      </Link>
    ));
  }

  const themeSwitcher = (
    <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
            {theme.colorScheme === 'light' ? (
              <IconMoonFilled style={{ width: '16px', height: '16px' }} stroke={1.5} />
            ) : (
              <IconSunFilled style={{ width: '16px', height: '16px' }} stroke={1.5} />
            )}
    </div>
  )

  const switchLanguage = (language: AvailableLanguages['language']) => {
    setLanguage(language);
  }

  const languageSwitcher = (
    <LanguageSwitcher onLanguageChange={switchLanguage}></LanguageSwitcher>
  )

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Link
            key={'home'}
            to={'/'}
            className={classes.brand}
            onClick={() => handleLinkClick('/')}
          >
            <div style={{ fontSize: '2rem' }}>Krystian Dajewski</div>
            <div style={{ fontSize: '3rem', color: 'var(--brand-orange)' }}>.</div>
          </Link>
        </Group>
        <Group>
          <Group>
            {renderItems(currentLanguage as AvailableLanguages['language'])}
          </Group>
          <Autocomplete
            placeholder="Search"
            icon={<IconSearch style={{ width: '16px', height: '16px' }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />
          <Tooltip label={'Change language'}>
            {languageSwitcher}
          </Tooltip>
          <Tooltip label={'Change theme'}>
            {themeSwitcher}
          </Tooltip>
        </Group>
      </div>
    </header>
  );
}

export default Navbar;