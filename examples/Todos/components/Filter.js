import React from 'react';

const Filter = ({ filter, children, set }) => {
  const handleClick = () => set(children.toLowerCase());

  return (
    <button disabled={filter === children} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Filter;
