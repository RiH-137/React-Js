import React from 'react';
import ReactDOM from 'react-dom/client';

//----------------------------    JSX      ---------------------------------------------------------


// function MyComponent() {
//     const name = "RiH";
//     const element = <h1>Hello, {name}</h1>;
//     // return element;

//     const a=3;
//     const b=5;
//     return <h4> the answer is  {a+b} </h4>;
    

// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<MyComponent />);




// ----------------------------     Javascript in JSX   ---------------------------------------------------------


// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'RiH',
//     lastName: 'Man'
// };

// const element = (
//     <h1>
//         Hello, {formatName(user)}   
//     </h1>
// );
// //calling inside the JSX


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);

    




// ----------------------------     JSX with attributes   ---------------------------------------------------------

function DynamicAttribute(){
    const linkURl="https://www.google.com";
    // wrong--> const element= <a href={linkURl} Click here </a>;

    return <a href={linkURl}> Click here </a>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DynamicAttribute />);


