import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title, useMantineTheme, rem } from '@mantine/core';
import classes from './Hobbys.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const getTitleColor = (category: string) => {
    return category === 'football' ? 'yellow' : 'white'
  };
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs" style={{color: 'white'}}>
          {category}
        </Text>
        <Title order={3} className={classes.title} style={{color: getTitleColor(category)}}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
    {
      image:
        'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Exploring the latest trends in Technology',
      category: 'technology',
    },
    {
      image:
        'https://images.unsplash.com/photo-1706211307284-889793e9fdc4?q=80&w=3109&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Universe misteries',
      category: 'astronomy',
    },
    {
      image:
        'https://images.unsplash.com/photo-1605622713668-fc5d98d5becc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVzc2l8ZW58MHx8MHx8fDA%3D',
      title: 'FC Barcelona',
      category: 'football',
    },
    {
      image:
        'https://images.unsplash.com/photo-1516163173352-d1c4d006f9ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Apple',
      category: 'Product Management',
    },
    {
      image:
        'https://4kwallpapers.com/images/walls/thumbs_3t/13489.jpg',
      title: 'Formula 1',
      category: 'Racing',
    },
  ];

export function Hobbys() {
  const theme = useMantineTheme();
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.container}>
    <Carousel
    className={classes.carousel}
      slideSize={'100%'}
      slideGap={'xl'}
      align="start"
      loop
    >
      {slides}
    </Carousel>
    </div>
  );
}