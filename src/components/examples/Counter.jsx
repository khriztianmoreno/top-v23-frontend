import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(10);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>
        El valor actual es:
        {count}
      </h1>
      <button type="button" onClick={handleAdd}>
        {' '}
        + 1
      </button>
      <button type="button" onClick={handleRemove}>
        {' '}
        - 1
      </button>
    </>
  );
};
export default Counter;
