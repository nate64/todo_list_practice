import React, { Component } from 'react';
import List from './List';
import ToDoForm from './ToDoForm';

class App extends Component {
  state = { 
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn Redux', complete: false },
    ]
  }

  render() {
    const { todos } = this.state;
 
    return (
      <div>
        <ToDoForm />
        <List name="Todo List" items={todos} />
      </div>
    );
  }
}

export default App;
