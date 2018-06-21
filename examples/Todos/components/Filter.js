import React from 'react';

const Filter = ({ filter, children, set }) => {
  const handleOnClick = () => set(children.toLowerCase());

  return (
    <span>
      <button disabled={filter === children} onClick={handleOnClick}>
        {children}
      </button>{' '}
    </span>
  );
};

export default Filter;
