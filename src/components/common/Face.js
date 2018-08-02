import React from 'react';

export default ({ type, size }) => {
  const getParams = () => {
    switch (type) {
      case 1:
        return {
          d: 'M10 50 C 15 35, 45 35, 50 50',
        };
      case 2:
        return {
          d: 'M10 50 C 20 40, 40 40, 50 50',
        };
      case 3:
        return {
          d: 'M10 50 C 20 45, 40 45, 50 50',
        };
      case 4:
        return {
          d: 'M15 46 C 22 46, 37 46, 45 46',
        };
      case 5:
        return {
          d: 'M10 42 C 20 47, 40 47, 50 42',
        };
      case 6:
        return {
          d: 'M10 42 C 20 52, 40 52, 50 42',
        };
      case 7:
        return {
          d: 'M10 42 C 15 57, 45 57, 50 42',
        };

      default:
        return {
          d: '',
        };
    }
  };

  const mouth = getParams();

  return (
    <svg viewBox="0 0 60 60" preserveAspectRatio="xMidYMid meet" height={size} width={size}>
      <circle cx="20" cy="24" r="3" fill="black" />
      <circle cx="40" cy="24" r="3" fill="black" />
      <path d={mouth.d} stroke="black" strokeWidth="3" fill="transparent" />
    </svg>
  );
};
