```jsx
import React, { useState} from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const maxLimit = 10;

  const handleIncrease = () => {
    if (count < maxLimit) {
      setCount(count + 1);
}
};

  const handleDecrease = () => {
    if (count> 0) {
      setCount(count - 1);
}
};

  return (
    <div className="counter-container">
      <h1>Click Counter</h1>
      <h2>{count}</h2>
      <div className="button-group">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
      {count === maxLimit && (
        <p className="limit-msg"> You've reached the maximum limit!</p>
)}
    </div>
);
}

export default Counter;
```

