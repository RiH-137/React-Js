import React, { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    // Start the timer when the component mounts
    
    useEffect(() => {
        console.log("Component Mounted, timer is started");

        const timer = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);

        // Cleanup interval on component unmount
        return () => {
            clearInterval(timer);
            console.log("Component Unmounted, timer is stopped");
        };
    }, [time]); // Empty dependency array ensures this effect runs only once and 'time' dependency ensures it runs whenever 'time' changes

    return (
        <div>
            <h1>Timer / Stopwatch </h1>
            <p>Current Time is {time}</p>
        </div>
    );
};

export default Timer;
