
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo'

class ToDoList extends React.Component {
    render() {
    return(
        <div className='to-do-list'>
            {this.props.arr.map(item => (
                <ToDo key={item.id} item={item} toggleTodo={this.props.toggleTodo}/>
            ))
        }
        </div>
    )
    }
}


export default ToDoList