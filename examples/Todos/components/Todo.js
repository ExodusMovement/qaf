import React from 'react';

const Todo = ({ id, text, completed, remove, toggle }) => {
  const handleClick = () => remove(id);
  const handleChange = () => toggle(id);

  const textStyle = {
    textDecoration: completed ? 'line-through' : 'none'
  };

  return (
    <div>
      <button onClick={handleClick}>Remove</button>{' '}
      <input type="checkbox" checked={completed} onChange={handleChange} />{' '}
      <span style={textStyle}>{text}</span>
    </div>
  );
};

export default Todo;
