import React, { useEffect } from 'react';
import { useState } from 'react';

import "./App.css";

import MyComponent from "./MyComponent";

import MyComponentWithCounter from "./MyComponentWithCounter";

function App(){

  // to make invisible --> making unmount
  const [isVisible, setIsVisible] = useState(true);



  useEffect( () => {
    console.log("Component Mounted")

    
  }, []);

  return (
    <div className="App">
      <MyComponent />

      { isVisible ? <MyComponentWithCounter /> : <></>}

      <button onClick={ () => setIsVisible(!isVisible)}>Toggle Visibility</button>
    </div>
  )
}

export default App;