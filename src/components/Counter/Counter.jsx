import { useState } from 'react';
import styles from './Counter.module.css';

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(0);

    return (
        <div className={styles["counter-container"]}>
            <p className={styles["count-display"]}>{count}</p>
            <button className={styles["counter-button"]} onClick={decrement}>Decrement</button>
            <button className={styles["counter-button"]} onClick={reset}>Reset</button>
            <button className={styles["counter-button"]} onClick={increment}>Increment</button>
        </div>);
}

export default Counter