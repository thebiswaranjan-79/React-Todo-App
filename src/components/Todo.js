import React from 'react';
import { useState } from 'react';
import TodoItem from "./TodoItem";

const Todo = (props) => {
    const[todoItems, setTodoItems] = useState( [
        {data : 'Solve DSA', id : 1},
        {data : 'Do React', id : 2},
        {data : 'Reat Computer Graphics'},
    ]);
    const[inputText, setInputText] = useState("");

    function editTodo(id, newTodo){
        let updatedTodos = todoItems.map((todo) => {
            if(todo.id === id) todo.data = newTodo;
            return todo;
        });
        setTodoItems(updatedTodos);
    }

    // Adding new Todo
    function addNewTodo(inputText){
        if(inputText === "") return;

        let newTodo = {data : inputText, id : (new Date().getTime())};
        setTodoItems([...todoItems, newTodo]);
        setInputText("");
    }

    // Delete Todo 
    function deleteTodo(id){
        let remainingTodos = todoItems.filter((todo) => todo.id !==id);
        setTodoItems(remainingTodos);
    }

   

    return (
        <div className='main'>
            <div>
                <h1>Todo App</h1>
            </div>

            <div className='add-todo'>
                <input type='text' value={inputText}
                 onChange={(e) => setInputText(e.target.value)}
                 onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        addNewTodo(inputText);
                    }
                }}/>

                <button onClick={() => addNewTodo(inputText)}>Add Todo</button>
            </div>

            <ul className='todo-list'> 
                {todoItems.map((todo) => (<TodoItem todo = {todo} key = {todo.id}
                                                    delete = {() => deleteTodo(todo.id)}   
                                                    edit = {(newTodo) => editTodo(todo.id, newTodo)}      
                />))}
            </ul>
        </div>
    );
}

export default Todo;
