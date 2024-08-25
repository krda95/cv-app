import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconCode, IconBrush, IconUserCheck, IconCalendarEvent, IconDownload } from '@tabler/icons-react';
import classes from './Experience.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollToEnd } from '../providers/ScrollProvider';


const features = [
    {
      icon: IconCode,
      title: 'Proficient in TypeScript and Angular',
      description: 'Experience in building scalable web applications with TypeScript and Angular frameworks.',
    },
    {
      icon: IconBrush,
      title: 'Figma for UI/UX Design',
      description: 'Skilled in creating detailed mockups and prototypes using Figma to streamline design processes.',
    },
    {
      icon: IconUserCheck,
      title: 'Client Refinements and Sprint Planning',
      description: 'Conduct client refinements, gather requirements, and plan sprints using Jira for efficient project management.',
    },
    {
      icon: IconCalendarEvent,
      title: 'Agile Methodology',
      description: 'Experience in leading Agile teams, organizing sprints, and ensuring timely delivery of product features.',
    },
  ];

export function Experience() {
  const navigate = useNavigate();
    const onScrollToEnd = useScrollToEnd();

    useEffect(() => {
        onScrollToEnd(() => {
          navigate('/hobbys');
        });
      }, [onScrollToEnd]);
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        color='orange'
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={12} md={5} className={classes.grid}>
          <Title className={classes.title} order={2}>
            My Experience as a Technical Product Owner
          </Title>
          <Text c="dimmed">
            I have a diverse set of skills in both product ownership and technical expertise. Below is an overview of the key areas where I excel.
          </Text>

          <Button
            component="a"
            href="/cv.pdf"
            download
            color="orange"
            size="lg"
            radius="md"
            mt="xl"
            leftIcon={<IconDownload size={rem(20)} />}
          >
            View my CV
          </Button>
        </Grid.Col>
        <Grid.Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30}> 
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}