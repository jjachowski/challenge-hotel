import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Room } from '../types/hotelRooms';

interface RoomPreviewProps {
  room: Room;
}

export const RoomPreview: React.FC<RoomPreviewProps> = ({ room }) => {
  return (
    <Flex
      direction={['column', 'row']}
      my={4}
      bg='blackAlpha.200'
      p={4}
      rounded='lg'
    >
      <Box minW={['100%', '15rem']} mr={[0, '1rem']}>
        <Heading size={'sm'}>{room.name}</Heading>
        <Box>Adults: {room.occupancy.maxAdults}</Box>
        <Box>Children: {room.occupancy.maxChildren}</Box>
      </Box>
      <Box mt={4}>
        <Heading size='xs'>Room description</Heading>
        <Box>{room.longDescription}</Box>
      </Box>
    </Flex>
  );
};
