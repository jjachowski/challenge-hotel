import { Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { PeopleCountInput } from './PeopleCountInput';

export type PeopleCount = {
  adults: number;
  children: number;
};

interface FiltersProps {
  onChange: (newCount: PeopleCount) => void;
}

export const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.600');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    onChange({ adults, children });
  }, [adults, children]);

  return (
    <Flex
      w='100%'
      bg='whiteAlpha.300'
      p={4}
      rounded='xl'
      direction={['column', 'row']}
      mb={8}
    >
      <PeopleCountInput label='adults' onChange={(val) => setAdults(val)} />
      <PeopleCountInput label='children' onChange={(val) => setChildren(val)} />
    </Flex>
  );
};
