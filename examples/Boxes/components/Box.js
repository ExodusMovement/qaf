import React from 'react';

import Draggable from './Draggable';

const Box = ({ id, name, x, y, width, selected, select, move }) => {
  const handleClick = e => {
    select(id);
    e.stopPropagation();
  };

  const handleDrag = (e, info) => move(id, info.deltaX, info.deltaY);

  const boxStyle = {
    background: selected === id ? '#61dafb' : '#333',
    color: selected === id ? '#333' : '#61dafb',
    left: x,
    margin: 20,
    padding: 20,
    textAlign: 'center',
    top: y,
    width
  };

  return (
    <Draggable initialPos={{ x, y }} onDrag={handleDrag}>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div style={boxStyle} onClick={handleClick}>
        {name}
      </div>
    </Draggable>
  );
};

export default Box;
