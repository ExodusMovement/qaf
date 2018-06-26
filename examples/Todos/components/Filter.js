import React from 'react';

import Btn from '../../App/components/helpers/Btn';

const Filter = ({ filter, children, set }) => {
  const name = children.toLowerCase();

  const handleClick = () => set(name);

  return (
    <Btn disabled={filter === name} onClick={handleClick}>
      {children}
    </Btn>
  );
};

export default Filter;
