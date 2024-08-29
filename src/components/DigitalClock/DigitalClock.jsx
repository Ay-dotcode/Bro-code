import { useState } from 'react';
import styles from './DigitalClock.module.css';

function DigitalClock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    return (
        <div className={styles["clock-container"]}>
            <div className={styles.clock}>
                <span>{time}</span>
            </div>
        </div>
    )
}

export default DigitalClock