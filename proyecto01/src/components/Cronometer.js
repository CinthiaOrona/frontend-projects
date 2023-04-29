import React, { useState, useEffect } from "react";
import { GiStopwatch } from "react-icons/gi";


const Cronometer = () => {
    // state to store time
    const [time, setTime] = useState(0);
    const [loading, setLoading] = useState(true);

    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        setLoading(false);
        let intervalId;
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    // Method to start and stop timer
    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    // Method to reset timer back to 0
    const reset = () => {
        setTime(0);
    };
    return (
        <>
            {loading ? 'Loading...' : <div className="stopwatch-container">
                <p className="stopwatch-time">
                    <GiStopwatch /> {hours}:{minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}:
                    {milliseconds.toString().padStart(2, "0")}
                </p>
                <div className="stopwatch-buttons">
                    <button className="stopwatch-button" onClick={startAndStop}>
                        {isRunning ? "Stop" : "Start"}
                    </button>
                    <button className="stopwatch-button" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
            }
        </>

    );
};

export default Cronometer;