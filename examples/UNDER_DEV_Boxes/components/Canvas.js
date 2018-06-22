import React from 'react';

import { Subscribe } from '../../../src';

import Arrows from './Arrows';
import Boxes from './Boxes';

const Canvas = () => (
  <Subscribe boxesStore arrowsStore>
    {(boxesStore, arrowsStore) => {
      const { boxes, select, add, move, selected } = boxesStore;

      const handleClick = e => {
        if (e.ctrlKey === false) return select(null);

        return add('Hello World!', boxes.find(box => box.id === selected));
      };

      const arrows = arrowsStore.arrows.map(arrow => ({
        ...arrow,
        from: boxes.find(box => box.id === arrow.from),
        to: boxes.find(box => box.id === arrow.to)
      }));

      return (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <div onClick={handleClick}>
          <Arrows {...{ arrows }} />
          <Boxes {...{ boxes }} {...{ select, move, selected }} />
        </div>
      );
    }}
  </Subscribe>
);

export default Canvas;
