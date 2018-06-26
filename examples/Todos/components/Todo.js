import React from 'react';

import Row from '../../helpers/Row';
import Btn from '../../helpers/Btn';
import Checkbox from '../../helpers/Checkbox';
import Block from '../../helpers/Block';

const Todo = ({ id, text, completed, remove, toggle }) => {
  const handleClick = () => remove(id);
  const handleChange = () => toggle(id);

  return (
    <Row>
      <Btn onClick={handleClick} square>
        -
      </Btn>

      <Checkbox checked={completed} onChange={handleChange} />

      <Block strikethrough={completed}>{text}</Block>
    </Row>
  );
};

export default Todo;
