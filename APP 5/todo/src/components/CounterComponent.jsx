import React, { useState } from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(12);

    console.log("Hello", count);

    const [value, setValue] = useState("RiH");

    return(
        <div className="counterHook">
            <p>Counter Value: {count}</p>
            <button onClick= { () => setCount(count + 1)}>Increment</button>
            <button onClick= { () => setCount(count - 1)}>Decrement</button>
            
            {/* reteurn odd and event as per count --> using JS inside HTML*/}
            <h6>Number is { count % 2 ===0 ? "Even" : "Odd" }</h6>

            <p>{value}</p>
            <button onClick= { () => setValue("Rishi")}>Change Value</button>

           
        </div>
    )

}

export default CounterComponent;