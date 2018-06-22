import React from 'react';

const Filter = ({ filter, children, set }) => {
  const handleClick = () => set(children.toLowerCase());

  return (
    <span>
      <button disabled={filter === children} onClick={handleClick}>
        {children}
      </button>{' '}
    </span>
  );
};

export default Filter;
