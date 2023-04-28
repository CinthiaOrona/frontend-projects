import { useState, useEffect } from 'react'


const CurrentClock = () => {
    const [time, setTime] = useState(0);

    function TickFormatted() {
        const time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }


    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 10);
    }, [time]);

    return (
        <section>
            <div className='stopwatch-time'>
                {TickFormatted()}
            </div>
        </section>
    )
}


export default CurrentClock