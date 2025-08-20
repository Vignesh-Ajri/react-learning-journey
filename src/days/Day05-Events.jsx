import React, { useState, Component } from "react";

export function ToggleTextFunctional() {
  const [isDark, setIsDark] = useState(false);

  // event handler
  function toggleMode() {
    setIsDark(!isDark);
  }

  return (
    <div className="flex flex-col items-center mt-10 border py-5">
      <h1 className="text-xl">Functional Component</h1>
      <p
        style={{
          color: isDark ? "white" : "black",
          backgroundColor: isDark ? "black" : "white",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        {isDark ? "Dark Mode" : "Light Mode"}
      </p>
      <button
        onClick={toggleMode}
        className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
      >
        Toggle Mode
      </button>
    </div>
  );
}

export class ToggleTextClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };

    // ✅ 1. Binding in Constructor (recommended older way)
    this.toggleMode1 = this.toggleMode1.bind(this);
  }

  // Method for constructor binding
  toggleMode1() {
    this.setState({ isDark: !this.state.isDark });
  }

  // ✅ 2. Class Property with Arrow Function (no need to bind)
  toggleMode2 = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  // ✅ 3. Inline Arrow Function in JSX
  // (not efficient in large apps, creates a new function each render)
  toggleMode3() {
    this.setState({ isDark: !this.state.isDark });
  }

  render() {
    const { isDark } = this.state;

    return (
      <div className="flex flex-col items-center mt-10 border py-5">
        <h1 className="text-xl">Class Component</h1>
        <p
          style={{
            color: isDark ? "white" : "black",
            backgroundColor: isDark ? "black" : "white",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          {isDark ? "Dark Mode" : "Light Mode"}
        </p>

        {/* ✅ 1. Binding in constructor */}
        <button
          onClick={this.toggleMode1}
          className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
        >
          Toggle (Bind in Constructor)
        </button>

        {/* ✅ 2. Class property arrow function */}
        <button
          onClick={this.toggleMode2}
          className="mt-4 px-4 py-2 rounded bg-green-500 text-white hover:bg-green-700"
        >
          Toggle (Class Property Arrow)
        </button>

        {/* ✅ 3. Inline Arrow Function in JSX */}
        <button
          onClick={() => this.toggleMode3()}
          className="mt-4 px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-700"
        >
          Toggle (Inline Arrow)
        </button>

        {/* ❌ Not used: Directly calling function in JSX 
            (like onClick={this.toggleMode3()}) → will run immediately */}
      </div>
    );
  }
}
