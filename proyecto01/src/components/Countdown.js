import React, { useState, useEffect } from 'react'
import { BsStopwatch } from 'react-icons/bs'

const Countdown = () => {
    const [time, setTime] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1000);  //Count till page is first loaded
            //setTime(time - 1000); //Count if running in background
        }, 10);
    }, [time]);

    const getTimeFormatted = (miliseconds) => {
        let total_seconds = parseInt(Math.floor(miliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return `${hours}:${minutes}:${seconds} [${miliseconds}]`;
    };

    return (
        <div className='stopwatch-time'>
            <BsStopwatch/> {getTimeFormatted(time)}            
        </div>
    )
}

export default Countdown