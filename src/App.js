import React, { Component } from 'react'

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Learn React', complete: true },
      { id: 2, name: 'change diapers', complete: false },
      { id: 3, name: 'mow the lawn', complete: false}
    ]
  }


  render() {
    const { todos } = this.state

    return (
      <div>
        <ul>
          { todos.map( todo => 
          <li key={todo.id}>{todo.name}</li>
          )  
        }
        </ul>



      </div>
    )
  }
}


export default App