import { Text, Card, RingProgress, Group } from '@mantine/core';
import classes from './About.module.css';
import { Slider } from '@mantine/core';
import { Container, Grid, SimpleGrid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useScrollToEnd } from '../providers/ScrollProvider';
import { useEffect } from 'react';
import { AvailableLanguages } from './LanguageSwitcher';
import translations from '../assets/Translations.json'

const stats = [
  { value: 13, label: 'Remaining' },
  { value: 3, label: 'InProgress' },
];

interface AboutProps {
  language: AvailableLanguages['language'];
}

const About: React.FC<AboutProps> = ({ language }) => {  
  const navigate = useNavigate();
  const onScrollToEnd = useScrollToEnd();

  useEffect(() => {
      onScrollToEnd(() => {
        navigate('/education');

      });
  }, [onScrollToEnd]);

  const completed = 25;
  const total = 33;

  const getTranslation = (key: string): string => {
    return translations[language][key as 'GreatExp']
  }

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label}>{stat.value}</Text>
      <Text size="xs" c="dimmed">
      {getTranslation(stat.label)}
      </Text>
    </div>
  ));

  return (
    <Container my="lg">
      <SimpleGrid cols={2} spacing="md" className={classes.mygrid}>
        <div className={classes.nameSection}>
        <div className={'name'}>
          {getTranslation('GreatExp')}
        </div>
        <div>
        {getTranslation('Since2018')}
        </div>
        </div>
        <Grid gutter="md">
          <Grid.Col>
            <Card  p="xl" radius="md" className={classes.card}>
          <div className={classes.inner}>
            <div>
              <Text fz="xl" className={classes.label}>
              {getTranslation('Projects')}
              </Text>
              <div>
                <Text className={classes.lead} mt={30}>
                  {completed}
                </Text>
                <Text fz="xs" c="dimmed">
                {getTranslation('Completed')}
                </Text>
              </div>
              <Group mt="lg">{items}</Group>
            </div>

            <div className={classes.ring}>
              <RingProgress
                roundCaps
                thickness={6}
                size={150}
                sections={[{ value: (completed / total) * 100, color: 'var(--brand-orange)' }]}
                label={
                  <div>
                    <Text ta="center" fz="lg" className={classes.label}>
                      {((completed / total) * 100).toFixed(0)}%
                    </Text>
                    <Text ta="center" fz="xs" c="dimmed">
                    {getTranslation('Completed')}
                    </Text>
                  </div>
                }
              />
            </div>
          </div>
        </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <div>
              <div className={classes.cardContainer}>
                <div className='name-container'>
                    <div className='name'>6</div>
                    <div className='dot'>.</div>
                </div>
                <div>{getTranslation('YearsExp')}</div>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div>
              <div>
                React
              <Slider
                color="orange"
                radius="lg"
                labelAlwaysOn
                value={75}
                label={(value) => `${value} %`}
                />
              </div>
              <div className={classes.sliderSection}>
                Angular
              <Slider
                color='orange'
                radius="lg"
                labelAlwaysOn
                value={90}
                label={(value) => `${value} %`}
                />
              </div>
              <div className={classes.sliderSection}>
                Figma
              <Slider
                color="orange"
                radius="lg"
                labelAlwaysOn
                value={85}
                label={(value) => `${value} %`}
                />
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default About;