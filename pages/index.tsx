import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getHotels } from '../api/hotels';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { HotelList } from '../components/HotelList';
import { Layout } from '../components/Layout';
import { Hotel } from '../types/hotel';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    setIsLoading(true);
    const response = await getHotels();
    setIsLoading(false);
    if (response.status === 200) {
      setHotels(response.data);
    }
  };

  return (
    <>
      <Head>
        <title>Challenge app</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box width='100%' h={['150px', '250px']} position='relative'>
        <Image
          src={
            'https://img.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg?t=st=1655033688~exp=1655034288~hmac=2be268d66c0120bf6111d4215c81c7a7c2d09886b55e6c2be25c2a404f8986c9&w=1480'
          }
          alt='happy people'
          layout='fill'
          objectFit='cover'
        />
      </Box>
      <Box position='absolute' right='10px'>
        <DarkModeSwitch />
      </Box>
      <Layout>
        <HotelList hotels={hotels ?? []} />
      </Layout>
    </>
  );
};

export default Home;
