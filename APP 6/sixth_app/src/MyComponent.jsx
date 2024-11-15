import React, { useEffect } from "react";

const MyComponent = () => {
    useEffect( () => {
        console.log("Buddy; It is Component unMounted; Click on the button to make Mount")
    })


    return(
        <div>
            <h1>Buddy, This Is My Component</h1>
            <h2>Buddy; It is Component unMounted; Click on the button to make Mount</h2>
        </div>
    )
}

export default MyComponent;