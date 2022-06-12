import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Room } from '../types/hotelRooms';
import { RoomPreview } from './RoomPreview';

interface RoomPreviewListProps {
  rooms?: Room[];
}

export const RoomPreviewList: React.FC<RoomPreviewListProps> = ({ rooms }) => {
  return (
    <Flex direction='column' maxH='30rem' overflow='auto'>
      {rooms?.map((room) => (
        <RoomPreview key={room.id} room={room} />
      ))}
    </Flex>
  );
};
