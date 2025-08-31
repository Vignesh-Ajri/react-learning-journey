import React from "react";
import TodoApp from "../projects/TodoApp";

export default function ToDo() {
  return (
    <div className="bg-gray-50 p-5">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-4 mb-2">
        Day14 - A simple Todo app
      </h3>
      <TodoApp />
    </div>
  );
}
