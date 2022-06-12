import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Hotel } from '../types/hotel';
import { Filters, PeopleCount } from './Filters';
import { HotelPreview } from './HotelPreview';

interface HotelListProps {
  hotels: Hotel[];
}

export const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  const [requirements, setRequirements] = useState<PeopleCount>({
    adults: 1,
    children: 0,
  });
  return (
    <Flex
      direction='column'
      align='center'
      justifyContent='center'
      w={['95%', '90%']}
    >
      <Filters onChange={(val) => setRequirements(val)} />
      {hotels.map((hotel) => (
        <HotelPreview
          key={hotel.id}
          hotel={hotel}
          requirements={requirements}
        />
      ))}
    </Flex>
  );
};
