import { StarIcon } from '@chakra-ui/icons';
import { HStack } from '@chakra-ui/react';
import React, { useState } from 'react';

interface StarRatingProps {
  numberOfStars?: number;
  onChange: (value: number) => void;
}

const isYellow = (index: number, rating: number, hoveredOn: number) => {
  if (rating >= index) return 'yellow';
  if (hoveredOn >= index) return 'yellow';
  return undefined;
};

export const StarRating: React.FC<StarRatingProps> = ({
  numberOfStars = 5,
  onChange,
}) => {
  const [rating, setRating] = useState(0);
  const [hoveredOn, setHoveredOn] = useState<number>(-1);

  const stars = [...Array(numberOfStars)].map((x, i) => (
    <StarIcon
      key={i}
      h={6}
      w={6}
      onMouseEnter={() => {
        setHoveredOn(i);
      }}
      color={isYellow(i, rating, hoveredOn)}
      onClick={() => {
        setRating(i);
        onChange(i + 1);
      }}
    />
  ));

  return <HStack onMouseLeave={() => setHoveredOn(-1)}>{stars}</HStack>;
};
