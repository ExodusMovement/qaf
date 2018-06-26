import React from 'react';

import Button from '../../App/components/helpers/Button';

const Filter = ({ filter, children, set }) => {
  const name = children.toLowerCase();

  const handleClick = () => set(name);

  return (
    <Button disabled={filter === name} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default Filter;
