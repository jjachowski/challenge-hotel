import {
  Button,
  Heading,
  HStack,
  Input,
  useNumberInput,
} from '@chakra-ui/react';
import React from 'react';

interface PeopleCountInputProps {
  label: string;
  onChange: (count: number) => void;
}

export const PeopleCountInput: React.FC<PeopleCountInputProps> = ({
  label,
  onChange,
}) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 6,
      precision: 0,
      onChange: (val) => onChange(Number(val)),
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack>
      <Heading size='sm' w='80px'>
        {label}
      </Heading>
      <Button {...dec}>-</Button>
      <Input {...input} maxW='60px' textAlign='center' />
      <Button {...inc}>+</Button>
    </HStack>
  );
};
