import React, { Component, useState } from "react";

export function CounterAppFunctional() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5 m-5 border">
      <h1 className="text-2xl font-bold">Counter App (Functional)</h1>
      <p className="text-xl">Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}


export class CounterAppClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-5 m-5 border">
        <h1 className="text-2xl font-bold">Counter App (Class)</h1>
        <p className="text-xl">Count: {this.state.count}</p>
        <div className="flex gap-2">
          <button
            onClick={this.increment}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            +
          </button>
          <button
            onClick={this.decrement}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            -
          </button>
          <button
            onClick={this.reset}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
