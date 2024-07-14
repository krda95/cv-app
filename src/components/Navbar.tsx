import { Autocomplete, Group, useMantineTheme } from '@mantine/core';
import { IconSearch, IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import {  } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/education', label: 'Education' },
  { link: '/experience', label: 'Experience' },
  { link: '/hobbys', label: 'Hobbys' },
];

interface NavbarProps {
    toggleTheme: () => void;
    currentTheme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, currentTheme }) => {
  const [activeLink, setActiveLink] = useState<string>('');
  const theme = useMantineTheme();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={`${classes.link} ${activeLink === link.link ? classes.linkActive : ''}`}
      onClick={() => handleLinkClick(link.link)}
      style={{
        color: activeLink == link.link ? theme.colors.gray[3] : theme.colors.gray[5],
      }}
    >
      {link.label}
    </Link>
  ));

  const themeSwitcher = (
    <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
            {theme.colorScheme === 'light' ? (
              <IconMoonFilled style={{ width: '16px', height: '16px' }} stroke={1.5} />
            ) : (
              <IconSunFilled style={{ width: '16px', height: '16px' }} stroke={1.5} />
            )}
    </div>
  )

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Link
            key={'home'}
            to={'/'}
            className={`${classes.rmLink} name-link`}
            onClick={() => handleLinkClick('/')}
          >
            <div style={{ fontSize: '2rem' }}>Krystian Dajewski</div>
            <div style={{ fontSize: '2rem', color: 'var(--brand-orange)' }}>.</div>
          </Link>
        </Group>
        <Group>
          <Group>
            {items}
          </Group>
          <Autocomplete
            placeholder="Search"
            icon={<IconSearch style={{ width: '16px', height: '16px' }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />
        {themeSwitcher}
        </Group>
      </div>
    </header>
  );
}

export default Navbar;