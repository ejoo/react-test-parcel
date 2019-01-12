import React from "react";
import TodoItem from "./TodoItem";
export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, text: "Go to gym", completed: false },
        { id: 2, text: "Go to school", completed: true },
        { id: 3, text: "Go to bazaar", completed: false }
      ],
      displayTodos: true
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {}

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <h2>A best Todo App</h2>
        <button>Show </button>
        {this.state.displayTodos &&
          this.state.todos.map(item => {
            return <TodoItem item={item} key={item.id} />;
          })}
      </div>
    );
  }
}
