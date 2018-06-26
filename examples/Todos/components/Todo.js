import React from 'react';

import Row from '../../App/components/helpers/Row';
import Button from '../../App/components/helpers/Button';
import Checkbox from '../../App/components/helpers/Checkbox';
import Block from '../../App/components/helpers/Block';

const Todo = ({ id, title, completed, remove, toggle }) => {
  const handleClick = () => remove(id);
  const handleChange = () => toggle(id);

  return (
    <Row>
      <Button onClick={handleClick} square>
        -
      </Button>

      <Checkbox checked={completed} onChange={handleChange} />

      <Block strikethrough={completed}>{title}</Block>
    </Row>
  );
};

export default Todo;
