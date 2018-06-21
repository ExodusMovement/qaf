import React from 'react';

const Filter = ({ filter, children, set }) => {
  const handleOnClick = () => set(children.toLowerCase());

  return (
    <button disabled={filter === children} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Filter;
