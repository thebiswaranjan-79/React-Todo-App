import React from 'react';
import { useState } from 'react';


const TodoItem = (props) => {
    const[isEditing, setIsEditing] = useState(false);
    const[todoData, setTodoData] = useState(props.todo.data);

    return (
        <li className='todo-item'>        
            <div className='todo-data'>
                {isEditing ? (<input type='text' value={todoData} 
                onChange={(e) => setTodoData(e.target.value)}/>) 
                : (<span>{props.todo.data}</span>)}
            </div>
            <div className='btnsDiv'>
                <button onClick={() => {props.delete()}}>
                        Done
                </button>

                <button onClick={() => {
                    setIsEditing(!isEditing);
                    isEditing && props.edit(todoData);
                }}>
                        {isEditing ? 'Save' : 'Edit'}
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
