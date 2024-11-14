import React from 'react';

const Todoitem=(props)=>{
    return (
        <li className='todo-item'>
            <span>
                {/*<input type='checkbox'/>*/}
                {props.completed ? <></>:<input type='checkbox'/>}

                {/* <span className='todo-item-text'>Eat</span> */}
                <span className='todo-item-text'>{props.text}</span>
                <p>...</p>
            </span>
        </li>
    )
}


export default Todoitem;