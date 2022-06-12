import { Flex, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';
// import { Rating } from 'react-simple-star-rating';
import { PeopleCountInput } from './PeopleCountInput';
import { StarRating } from './StarRating';

export type Requirements = {
  adults: number;
  children: number;
  rating: number;
};

interface FiltersProps {
  onChange: (newCount: Requirements) => void;
}

export const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  const bgColor = useColorModeValue('blue.200', 'blue.900');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    onChange({ adults, children, rating });
  }, [adults, children, rating]);

  return (
    <Flex
      direction={['column', 'column', 'row']}
      w={['fit-content', 'fit-content', '100%']}
      bg={bgColor}
      p={4}
      px={[10, 10, 4]}
      rounded='xl'
      mb={['-30px', '-30px', 8]}
      justifyContent='space-around'
      alignItems='center'
      h={['200px', '200px', '70px']}
      position='relative'
      top={['-50px', '-50px', '-35px']}
    >
      <StarRating onChange={(val) => setRating(val)} />
      <PeopleCountInput label='adults' onChange={(val) => setAdults(val)} />
      <PeopleCountInput label='children' onChange={(val) => setChildren(val)} />
    </Flex>
  );
};
