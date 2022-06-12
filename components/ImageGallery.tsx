import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { HotelImage } from '../types/hotel';

interface ImageGalleryProps {
  images: HotelImage[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <Box
      w={['100%', '20rem']}
      minW={['100%', '20rem']}
      h={['200px', '15rem']}
      rounded='xl'
      overflow='hidden'
      bg='black'
    >
      <Carousel infiniteLoop showThumbs={false}>
        {images.map((img) => (
          <Box
            key={img.url}
            w={['100%', '20rem']}
            h={['200px', '15rem']}
            rounded='xl'
            overflow='hidden'
            position='relative'
          >
            <Image
              src={img.url}
              alt={img.alt}
              layout='fill'
              objectFit='contain'
              // width='500px'
              // height='500px'
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
