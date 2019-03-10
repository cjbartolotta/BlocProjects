import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    todos: [
      { description: 'Walk the dog', isCompleted: true, id: 1 },
      { description: 'Wash the dishes', isCompleted: false, id: 2 },
      { description: 'Run 3 miles', isCompleted: false, id: 3 }
    ],
    newTodoDescription: ''
  }
}

handleChange(e) {
  this.setState({ newTodoDescription: e.target.value })
}

handleSubmit(e) {
  e.preventDefault();
  if (!this.state.newTodoDescription) { return }
  const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
  this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
}

toggleComplete(index) {
  const todos = this.state.todos.slice();
  const todo = todos[index];
  todo.isCompleted = todo.isCompleted ? false : true;
  this.setState({ todos: todos });
}

deleteToDo (id)  {
  console.log(id)
    var remainingToDos = this.state.todos.filter((todo) => {
        return todo.id !== id
    });
    this.setState({ todos: remainingToDos })
}

  render() {
    return (
      <div className="App">
         <ul>
         { this.state.todos.map( (todo, index) =>
           <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } onDelete={(id) => this.deleteToDo(id)} id={todo.id}  />
         )}
         </ul>
         <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text"  value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
         </form>
      </div>
    );
  }
}

export default App;
