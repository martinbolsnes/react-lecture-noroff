import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleOnDecreaseClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>This is the current count: {count}</p>
      <button
        style={{
          backgroundColor: 'green',
          border: 'none',
          padding: '10px',
          margin: '5px',
        }}
        onClick={() => setCount(count + 1)}
      >
        Increase +
      </button>
      <button
        style={{
          backgroundColor: 'red',
          border: 'none',
          padding: '10px',
          margin: '5px',
        }}
        onClick={() => handleOnDecreaseClick()}
      >
        Decrease -
      </button>
    </div>
  );
};

export default Counter;
