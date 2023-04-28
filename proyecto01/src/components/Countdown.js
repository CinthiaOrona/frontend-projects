import React, { useState, useEffect } from 'react'

const Countdown = () => {
    const [time, setTime] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1000);
        }, 10);
    }, [time]);

    const getTimeFormatted = (miliseconds) => {
        let total_seconds = parseInt(Math.floor(miliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className='stopwatch-time'>
        {getTimeFormatted(time)}
        </div>
    )
}

export default Countdown