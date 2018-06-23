import React from 'react';

const Todo = ({ id, text, completed, remove, toggle }) => {
  const handleClick = () => remove(id);
  const handleChange = () => toggle(id);

  const textStyle = {
    height: 40,
    textDecoration: completed ? 'line-through' : 'none',
    verticalAlign: 'middle'
  };

  return (
    <div>
      <button onClick={handleClick}>Remove</button>
      <label className="checkbox">
        <input type="checkbox" checked={completed} onChange={handleChange} />
        <span className="checkbox-mark" />
      </label>
      <span style={textStyle}>{text}</span>
    </div>
  );
};

export default Todo;
