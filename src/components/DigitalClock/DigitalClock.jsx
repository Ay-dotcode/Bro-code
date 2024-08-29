import { useEffect, useState } from 'react';
import styles from './DigitalClock.module.css';

function DigitalClock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles["clock-container"]}>
            <div className={styles.clock}>
                <span>{time}</span>
            </div>
        </div>
    )
}

export default DigitalClock