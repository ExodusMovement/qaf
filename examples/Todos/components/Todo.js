import React from 'react';

import Row from '../../App/components/helpers/Row';
import Btn from '../../App/components/helpers/Btn';
import Checkbox from '../../App/components/helpers/Checkbox';
import Block from '../../App/components/helpers/Block';

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
