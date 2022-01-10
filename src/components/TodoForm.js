import React from 'react'

class ToDoForm extends React.Component {

    render() {
        return(
            <form onSubmit={this.props.submitHandler}>
            <input type='text' 
            id='inputForm'
            name='input' 
            placeholder = 'type to add something'
            value={this.props.input} 
            onChange={this.props.changeHandler}
            />
            <button id='submitBtn' disabled={this.props.input === '' ? true : false}>Submit</button>
            <button id='deleteBtn' onClick={this.props.deleteHandler}>Delete</button>
        </form>
    )
        } 
}

export default ToDoForm;