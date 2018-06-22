import React from 'react';

const Arrow = ({ from, to }) => {
  const [x1, y1, x2, y2] = [
    from.x + from.width / 2,
    from.y + 20,
    to.x + to.width / 2,
    to.y + 20
  ];

  const arrowStyle = { stroke: '#61dafb' };

  return <path style={arrowStyle} d={`M${x1} ${y1} L${x2} ${y2}`} />;
};

export default Arrow;
