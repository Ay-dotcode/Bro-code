import { useEffect, useRef, useState } from 'react';
import styles from './StopWatch.module.css';

function StopWatch() {
    const startTimeRef = useRef(0);
    const intervalIdRef = useRef(null);
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        if (isRunning)
            intervalIdRef.current = setInterval(() =>
                setElapsedTime(Date.now() - startTimeRef.current), 10);
        return () =>
            clearInterval(intervalIdRef.current);
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        stop();
        setElapsedTime(0);
    }

    function formatTime() {
        const hours = `0${Math.floor(elapsedTime / 3600000)}`.slice(-2);
        const minutes = `0${(Math.floor(elapsedTime / 60000) % 60)}`.slice(-2);
        const seconds = `0${(Math.floor(elapsedTime / 1000) % 60)}`.slice(-2);
        const milliseconds = `00${(Math.floor(elapsedTime) % 1000)}`.slice(-3); // Adjust to show three digits
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className={styles.stopwatch}>
            <div className={styles.display}>{formatTime()}</div>
            <div className={styles.controls}>
                {isRunning ? (
                    <button onClick={stop} className={styles.stop}>Stop</button>
                ) : (
                    <button onClick={start} className={styles.start}>Start</button>
                )}
                <button onClick={reset} className={styles.reset}>Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;
