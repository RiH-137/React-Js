import React from 'react';

function HelloWorld(){
    return <h1>Hello World</h1>;
}

// here HelloWorld is a simple react component which is a function that returns JSX can be 
// called as a function and it will return the JSX that we have written in the function.

//Rules for creating react component


// -------------------------------------------------------------------------------------------

// RULE 1. Should return JSX

// correct code:
import React from 'react';

function HelloWorld(){
    return <h1>Hello World</h1>;
}

// wrong code:
import React from 'react';

function HelloWorld(){
    return 'Hello World';    // string is there instead of JSX
}

// -------------------------------------------------------------------------------------------

// RULE 2. Should start with capital letter

// correct code:
import React from 'react';

function HelloWorld(){
    return <h1>Hello World</h1>;
}

// wrong code:
import React from 'react';

function helloWorld(){
    return <h1>Hello World</h1>;
}

// here HelloWorld is correct and helloWorld is wrong because react component should start with capital letter.



// -------------------------------------------------------------------------------------------



