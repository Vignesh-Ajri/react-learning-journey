import React, { Component } from "react";

export function TodoListFunctional() {
  const todos = [
    { id: 1, task: "Learn React basics" },
    { id: 2, task: "Practice components" },
    { id: 3, task: "Understand props & state" },
    { id: 4, task: "Learn lists & keys" },
  ];

  return (
    <div className="p-4 border m-4">
      <h2 className="text-xl font-bold mb-2">📋 Todo List (Functional)</h2>
      <ul className="list-disc pl-5">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-1">
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export class TodoListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, task: "Learn React basics" },
        { id: 2, task: "Practice components" },
        { id: 3, task: "Understand props & state" },
        { id: 4, task: "Learn lists & keys" },
      ],
    };
  }

  render() {
    return (
      <div className="p-4 border m-4">
        <h2 className="text-xl font-bold mb-2">📋 Todo List (Class)</h2>
        <ul className="list-disc pl-5">
          {this.state.todos.map((todo) => (
            <li key={todo.id} className="mb-1">
              {todo.task}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
