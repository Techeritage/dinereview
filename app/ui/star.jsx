import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Star = ({ filled, onClick }) => {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer', color: filled ? '#FFA500' : 'gray' }}>
      <StarIcon width={35} />
    </span>
  );
};

export default Star;
