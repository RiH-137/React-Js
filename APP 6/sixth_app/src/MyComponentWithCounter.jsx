import React, { useEffect, useState} from "react";

const MyComponentWithCounter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // useEffect 1
    useEffect( () => {
        console.log("unmounting...")
    }, [])


    // useEffect 2 with a dependency array--> count
    useEffect( () => {
        console.log("My Component is Mounted, Buddy, count")
    }, [count1, count2])

    return(
        <div>
            <h1>My Component With Counter</h1>
            <h2>Count: {count1}</h2>
            <button onClick={ () => setCount1(count1 + 1)}>Increment 1</button>

            <h2>Count: {count2}</h2>
            <button onClick={ () => setCount2(count2 + 1)}>Increment 2</button>
        </div>
    )
}

export default MyComponentWithCounter;