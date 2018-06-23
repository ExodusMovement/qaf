import React from 'react';

const Todo = ({ id, text, completed, remove, toggle }) => {
  const handleClick = () => remove(id);
  const handleChange = () => toggle(id);

  const textStyle = {
    textDecoration: completed ? 'line-through' : 'none'
  };

  return (
    <div>
      <button data-shape="square" onClick={handleClick}>
        -
      </button>

      <label className="checkbox">
        <input type="checkbox" checked={completed} onChange={handleChange} />
        <span className="checkbox-mark" />
      </label>

      <input type="text" style={textStyle} value={text} disabled />
    </div>
  );
};

export default Todo;
