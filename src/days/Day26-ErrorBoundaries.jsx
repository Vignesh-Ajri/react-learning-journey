import React from "react";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 border border-red-400 rounded-lg text-red-700">
          <h2 className="font-semibold text-lg">Something went wrong.</h2>
          <p>Please try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Buggy Component (intentionally throws error)
function BuggyComponent() {
  throw new Error("I crashed!");
  // return <h3>This will never render</h3>;
}

export default function Day26() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Error Boundary Example
        </h1>
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
      </div>
    </div>
  );
}
