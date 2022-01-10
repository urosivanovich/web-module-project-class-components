import React from 'react';
import './Todo.css'

class Todo extends React.Component {
    render(){
    return (
        <div onClick={() => this.props.toggleTodo(this.props.item.id)} className={`todo${this.props.item.completed ? ' completed' : ''}`}>
        <p>{this.props.item.task}</p>

        </div>

    )
    }
}

export default Todo