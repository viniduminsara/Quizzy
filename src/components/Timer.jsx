import {useEffect, useState} from "react";

const Timer = ({ onTimeUp }) => {

    const [timeLeft, setTimeLeft] = useState(10 * 60);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timerId);
        } else {
            onTimeUp();
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className='text-lg poppins-semibold'>{`Time Left: ${formatTime(timeLeft)}`}</div>
    )
}

export default Timer;
