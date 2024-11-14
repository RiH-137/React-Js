import React from 'react';

// const HeaderFunction = () => {
//     return <h1 className='todo-header'> My Todo </h1>
// }

const HeaderFunction= (props) =>{

    return <h1 className='todo-header'>{props.title}</h1>           
    // props.title is used to pass the title from App.js

}
// not the give here the title in the HeaderFunction tag in App.js (below)
<HeaderFunction title="My Todo App" />


export default HeaderFunction;

// exporting from Header.jsx to App.js or any other file