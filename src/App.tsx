import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider, Text } from '@mantine/core';
import  Navbar  from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './components/Home';
import './index.css';
import ThemeProvider from './providers/ThemeProvider';



const About = () => <Text>About Page</Text>;
const Education = () => <Text>Education Page</Text>;
const Experience = () => <Text>Experience Page</Text>;
const Skills = () => <Text>Skills Page</Text>;
const Hobbys = () => <Text>Hobbys Page</Text>;

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <MantineProvider theme={{ colorScheme: theme, fontFamily: 'EB Garamond, Palatino, serif' }} withGlobalStyles withNormalizeCSS>
      <ThemeProvider>
      <Router>
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbys" element={<Hobbys />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;