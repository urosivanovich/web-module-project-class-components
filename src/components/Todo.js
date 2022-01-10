import React from 'react';
import './Todo.css'

const Todo = props => {
    return (
        <div onClick={() => props.toggleTodo(props.item.id)} className={`todo${props.item.completed ? ' completed' : ''}`}>
        <p>{props.item.task}</p>

        </div>

    )
}

export default Todo