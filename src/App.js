import React from 'react';
import TodoList from './components/TodoList';
import ToDoForm from './components/TodoForm';




const array = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      arr:array,
      input:'',

    }

  }

  toggleTodo = (id) =>{
    this.setState({
      arr: this.state.arr.map(item => {
        if (item.id === id){
          return {
            ...item, completed:!item.completed,
          }
        }
        else {
          return item;
        }
      })
    }
    )
  };

  changeHandler = e =>{
    this.setState({
      [e.target.name]:e.target.value,
    })
  };

  addItem = itemName =>{
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      arr: [...this.state.arr, newItem]
    })
  };

  submitHandler = e =>{
    e.preventDefault();
    this.addItem(this.state.input);
    this.setState({
      input:''
    })
  };
  
  deleteHandler = e =>{
    this.setState({
      ...this.state,
      arr: this.state.arr.filter(item => 
      !item.completed)})
  }



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      
        <TodoList arr={this.state.arr} toggleTodo={this.toggleTodo}/>
        <ToDoForm input={this.state.input} changeHandler={this.changeHandler}
        submitHandler={this.submitHandler} deleteHandler={this.deleteHandler}/>
      </div>
    );
  }
}

export default App;