import  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import  Navbar  from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './components/Home';
import './index.css';
import './App.css';
import ThemeProvider from './providers/ThemeProvider';
import About from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Hobbys } from './components/Hobbys';
import inLogo from './assets/linkedin.png'
import { ScrollProvider } from './providers/ScrollProvider';
import { LanguageProvider } from './providers/LanguageProvider';


function App() {
  const getTheme = (): 'light' | 'dark' => {
    return localStorage.getItem('theme') as 'light' | 'dark' ?? 'dark';
  }
  const [theme, setTheme] = useState<'light' | 'dark'>(getTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function LinkedIn() {
    return <a href="https://www.linkedin.com/in/krystian-dajewski/" target='_blank'>
      <img src={inLogo} className='in' alt="LinkedIn"/>
    </a>
  }

  return (
    <MantineProvider theme={{ colorScheme: theme, fontFamily: 'EB Garamond, Palatino, serif' }} withGlobalStyles withNormalizeCSS>
      <ThemeProvider>
        <ScrollProvider>
          <LanguageProvider>
            <Router>
              <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
              <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/hobbys" element={<Hobbys />} />
              </Routes>
            </Router>
            {LinkedIn()}
          </LanguageProvider>
        </ScrollProvider>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;