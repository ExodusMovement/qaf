import React from 'react';

const Todo = ({ id, text, completed, remove, toggle }) => {
  const handleOnClick = () => remove(id);
  const handleOnChange = () => toggle(id);

  const textStyle = {
    textDecoration: completed ? 'line-through' : 'none'
  };

  return (
    <div>
      <button onClick={handleOnClick}>Remove</button>{' '}
      <input type="checkbox" checked={completed} onChange={handleOnChange} />{' '}
      <span style={textStyle}>{text}</span>
    </div>
  );
};

export default Todo;
