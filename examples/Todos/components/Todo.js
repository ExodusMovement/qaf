import React from 'react';

import Btn from '../../helpers/Btn';
import Checkbox from '../../helpers/Checkbox';
import Input from '../../helpers/Input';

const Todo = ({ id, text, completed, remove, toggle }) => {
  const handleClick = () => remove(id);
  const handleChange = () => toggle(id);

  return (
    <div>
      <Btn onClick={handleClick} square>
        -
      </Btn>

      <Checkbox checked={completed} onChange={handleChange} />

      <Input value={text} strikethrough={completed} disabled />
    </div>
  );
};

export default Todo;
