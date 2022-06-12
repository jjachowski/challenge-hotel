import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Hotel } from '../types/hotel';
import { Filters, Requirements } from './Filters';
import { HotelPreview } from './HotelPreview';

interface HotelListProps {
  hotels: Hotel[];
}

export const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  const [requirements, setRequirements] = useState<Requirements>({
    adults: 0,
    children: 0,
    rating: 0,
  });

  return (
    <Flex
      direction='column'
      align='center'
      justifyContent='center'
      w={['95%', '90%']}
    >
      <Filters onChange={(val) => setRequirements(val)} />
      {hotels
        .filter((x) => Number(x.starRating) >= requirements.rating)
        .map((hotel) => (
          <HotelPreview
            key={hotel.id}
            hotel={hotel}
            requirements={requirements}
          />
        ))}
    </Flex>
  );
};
