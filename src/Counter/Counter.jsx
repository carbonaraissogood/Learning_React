import React, { useState } from 'react';
import styles from './Counter.module.css'

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => count + 1);
  }

  const decrement = () => {
    setCount(prevCount => count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return(
    <div className={styles.counterContainer}>
      <p>{count}</p>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>

      <button onClick={increment}>Increment</button>
      
    </div>
  );
}

export default Counter;