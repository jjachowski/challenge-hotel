import { Box, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
// import { Rating } from 'react-simple-star-rating';
import { PeopleCountInput } from './PeopleCountInput';
import ReactStars from 'react-stars';
import { StarRating } from './StarRating';

export type PeopleCount = {
  adults: number;
  children: number;
};

interface FiltersProps {
  onChange: (newCount: PeopleCount) => void;
}

const fillColorArray = ['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045'];

export const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  const bgColor = useColorModeValue('blue.200', 'blue.900');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    onChange({ adults, children });
  }, [adults, children]);

  return (
    <Flex
      w='100%'
      bg={bgColor}
      p={4}
      rounded='xl'
      direction={['column', 'row']}
      mb={8}
    >
      {/* <Flex direction='row' w='400px'>
      </Flex> */}
      <StarRating onChange={(value) => setRating(value)} />
      <PeopleCountInput label='adults' onChange={(val) => setAdults(val)} />
      <PeopleCountInput label='children' onChange={(val) => setChildren(val)} />
    </Flex>
  );
};
