import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getHotelRooms } from '../api/hotels';
import { Hotel } from '../types/hotel';
import { ImageGallery } from './ImageGallery';
import { Room } from '../types/hotelRooms';
import { RoomPreview } from './RoomPreview';
import { RoomPreviewList } from './RoomPreviewList';
import { PeopleCount } from './Filters';

interface HotelPreviewProps {
  hotel: Hotel;
  requirements: PeopleCount;
}

export const HotelPreview: React.FC<HotelPreviewProps> = ({
  hotel,
  requirements,
}) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const bgColor = useColorModeValue('blue.100', 'blue.900');

  useEffect(() => {
    if (hotel.id) {
      const fetchHotelRooms = async (id: string) => {
        const response = await getHotelRooms(id);
        if (response.status === 200) {
        }

        const wantedRooms = response.data.rooms.filter(
          (x) =>
            x.occupancy.maxAdults >= requirements.adults &&
            x.occupancy.maxChildren >= requirements.children
        );
        setRooms(wantedRooms);
      };

      fetchHotelRooms(hotel.id);
    }
  }, [hotel.id, requirements]);

  if (rooms.length === 0) return <></>;

  return (
    <Flex
      // bg='whiteAlpha.300'
      bg={bgColor}
      mb={[4, 8]}
      p={[4, 8]}
      w='100%'
      rounded='2xl'
      boxShadow='xl'
      direction='column'
    >
      <Flex direction={['column', 'row']} mb={[4, 8]}>
        <ImageGallery images={hotel.images} />

        <Box ml={[0, 4]}>
          <Heading size='xl' mb={4}>
            {hotel.name}
          </Heading>
          <Heading size='md' mb={2}>
            {hotel.address1}
          </Heading>
          {hotel.address2 !== '' && (
            <Heading size='md' mb={2}>
              {hotel.address2}
            </Heading>
          )}
        </Box>
      </Flex>
      <Heading size='sm'>Description</Heading>
      <Box mb={[4, 8]}>{hotel.description}</Box>
      <Heading size='sm'>Rooms</Heading>

      {/* <Flex direction='column'>
        {rooms?.map((room) => (
          <RoomPreview key={room.id} room={room} />
        ))}
      </Flex> */}
      <RoomPreviewList rooms={rooms} />
    </Flex>
  );
};
