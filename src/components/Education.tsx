import { Card, Image, Text, Group, Badge, Button } from '@mantine/core';
import classes from './Education.module.css';
import vilo from '../assets/vilo.png'
import wut from '../assets/wut.png'
import poja from '../assets/poja.png'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useScrollToEnd } from '../providers/ScrollProvider';
import  { AvailableLanguages } from './LanguageSwitcher';
import { useLanguage } from '../providers/LanguageProvider';

const labelsTranslation = {
  'en': {
    'mathematics': 'Mathematics',
    'science': 'Science',
    'programming': 'Programming',
    'teamwork': 'Teamwork',
    'creativity': 'Cretivity',
    'electronics': 'Electronics',
    'robotics': 'Robotics',
    'design': 'Design',
    'engineering': 'Engineering',
    'innovation': 'Innovation',
    'analytics': 'Analytics',
    'data': 'Data',
    'strategy': 'Strategy',
    'optimisation': 'Optimisation',
    'bigdata': 'Big Data',
    'leadership': 'Leadership',
  },
  'de': {
    'mathematics': 'Mathematik',
    'science': 'Wissenschaft',
    'programming': 'Programmierung',
    'teamwork': 'Teamarbeit',
    'creativity': 'Kreativität',
    'electronics': 'Elektronik',
    'robotics': 'Robotik',
    'design': 'Design',
    'engineering': 'Ingenieurwesen',
    'innovation': 'Innovation',
    'analytics': 'Analytik',
    'data': 'Daten',
    'strategy': 'Strategie',
    'optimisation': 'Optimierung',
    'bigdata': 'Big Data',
    'leadership': 'Führung',
  },
  'pl': {
    'mathematics': 'Matematyka',
    'science': 'Nauka',
    'programming': 'Programowanie',
    'teamwork': 'Praca zespołowa',
    'creativity': 'Kreatywność',
    'electronics': 'Elektronika',
    'robotics': 'Robotyka',
    'design': 'Projektowanie',
    'engineering': 'Inżynieria',
    'innovation': 'Innowacja',
    'analytics': 'Analityka',
    'data': 'Dane',
    'strategy': 'Strategia',
    'optimisation': 'Optymalizacja',
    'bigdata': 'Big Data',
    'leadership': 'Przywództwo',
  }
}

const eduTranslation = [{
  image: vilo,
  title: {
    'en': 'High school no. 6',
    'de': 'Oberschule Nr. 6',
    'pl': 'VI LO'
  },
  city: {
    'en': 'Gdynia',
    'de': 'Gdynia',
    'pl': 'Gdynia',
  },
  description: {
    'en': 'Mathematics & Physics.',
    'de': 'Mathematik & Physik.',
    'pl': 'Mat - Fiz.',
  },
  badges: [
    { emoji: '➕', label: 'mathematics' },
    { emoji: '🔬', label: 'science' },
    { emoji: '💻', label: 'programming' },
    { emoji: '🤝', label: 'teamwork' },
    { emoji: '💡', label: 'creativity' },
  ],
  link: 'https://vilo.org/'
},
{
    image: wut,
    title: {
      'en': 'Warsaw University of Technology',
      'de': 'Technische Schule in Warschau',
      'pl': 'Politechnika Warszawska',
    },
    city: {
      'en': 'Warsaw',
      'de': 'Warschau',
      'pl': 'Warszawa',
    },
    description: {
      'en': 'Bachelor\'s degree in Mechatronics.',
      'de': 'Ingenieur der Mechanotronik',
      'pl': 'Inżynier mechatroniki',
    },
    badges: [
      { emoji: '💻', label: 'programming' },
      { emoji: '🔌', label: 'electronics' },
      { emoji: '🤖', label: 'robotics' },
      { emoji: '🖊️', label: 'design' },
      { emoji: '🔨', label: 'engineering' },
      { emoji: '🚀', label: 'innovation' },
    ],
    link: 'https://eng.pw.edu.pl/'
  },
  {
    image: poja,
    title: {
      'en': 'Polish-Japanese Academy of Information Technology',
      'de': 'Polnisch-Japanische Akademie für Computertechnik',
      'pl': 'Polsko-Japońska Akademia Technik Komputerowych',
    },
    city: {
      'en': 'Warsaw',
      'de': 'Warschau',
      'pl': 'Warszawa',
    },
    description: {
      'en': 'Master\'s degree in BI',
      'de': 'Master der Informatik',
      'pl': 'Magister informatyki',
    },
    badges: [
      { emoji: '📊', label: 'analytics' },
      { emoji: '📈', label: 'data' },
      { emoji: '🧠', label: 'strategy' },
      { emoji: '🔧', label: 'optimisation' },
      { emoji: '🗄️', label: 'bigdata' },
      { emoji: '🌟', label: 'leadership' },
    ],
    link: 'https://pja.edu.pl/en/'
  }
];

export function Education() {
  const navigate = useNavigate();
  const onScrollToEnd = useScrollToEnd();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
      onScrollToEnd(() => {
        navigate('/experience');
      });
  }, [onScrollToEnd]);

  type LanguageMap = {
    en: string;
    de: string;
    pl: string;
  };

  const getTranslation = (language: AvailableLanguages['language'], dict: LanguageMap): string => {
    return dict[language];
  }

  const skills = {
    en: 'Skills',
    de: 'Fähigkeiten',
    pl: 'Umiejętności'
  }

  const details = {
    en: 'Show details',
    de: 'Mehr Info',
    pl: 'Zobacz więcej'
  }

  const educations = eduTranslation.map(education => (
    <Card key={education.title.en} withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={education.image} alt={getTranslation(currentLanguage, education.title)} fit='cover' height={150}/>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group>
          <Text fz="lg" fw={500} style={{width: 280}}>
          {getTranslation(currentLanguage, education.title)}
          </Text>
          <Badge size="sm" variant="light" color='orange'>
          {getTranslation(currentLanguage, education.city)}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
        {getTranslation(currentLanguage, education.description)}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          {getTranslation(currentLanguage, skills)}
        </Text>
        <Group>
        { education.badges.map(badge => (
            <Badge variant="light" color='orange' key={badge.label} leftSection={badge.emoji}>
                 {labelsTranslation[currentLanguage][badge.label as 'mathematics']}
            </Badge>
        ))}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Link target='_blank' to={education.link} style={{ flex: 1, background: 'orange', border: 0, color: 'black' }} className="btn btn-primary">{getTranslation(currentLanguage,details)}</Link>
      </Group>
    </Card>
  ))

  return (
    <div className={classes.educationList}>
        {educations}
    </div>
  );
}