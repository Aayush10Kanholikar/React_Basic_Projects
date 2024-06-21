import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingoptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl '} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          {' '}
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Img
            src={img5}
            height={['40', ' 400']}
            filter={'hue-rotate(-130deg)'}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            laudantium, praesentium quae sunt, veniam eligendi nam alias soluta
            tempora aspernatur quo in quas molestias suscipit placeat, aut
            reiciendis et nihil! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde at reiciendis iure laborum maxime quia iusto
            mollitia cumque, et rem totam excepturi atque enim. Omnis iure sit
            beatae vel est? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Est sint debitis perferendis inventore officia repellat
            voluptatibus doloremque, numquam, unde distinctio quaerat labore
            nemo repudiandae mollitia recusandae rerum omnis, natus animi.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'100%'} h={'50px'}>
      <Img src={img1} height={'95vh'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
        Watch the Future
      </Heading>
    </Box>
    <Box w={'100%'} h={'100vh'}>
      <Img src={img2} height={'95vh'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingoptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w={'100%'} h={'100vh'}>
      <Img src={img3} height={'95vh'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoptions}>
        Gamong on Console
      </Heading>
    </Box>
    <Box w={'100%'} h={'100vh'}>
      <Img src={img4} height={'95vh'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoptions}>
        Nigh life is Cool
      </Heading>
    </Box>
  </Carousel>
);
export default Home;
