import React from 'react';

const Filter = ({ filter, children, set }) => {
  const name = children.toLowerCase();

  const handleClick = () => set(name);

  return (
    <button disabled={filter === name} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Filter;
