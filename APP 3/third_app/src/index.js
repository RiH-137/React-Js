import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
    return <h1>Hello World; component is here...</h1>;
}

function MyButton(){
    return <button>Click me</button>;
}

const root=ReactDOM.createRoot(document.getElementById('root'));

//  root.render(<MyButton/>);                   // calling the function

root.render(
    <>
        <HelloWorld />
        <MyButton />
    </>
);

