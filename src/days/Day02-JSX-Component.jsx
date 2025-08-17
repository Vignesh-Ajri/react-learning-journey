import { Component } from "react";

export default function Day01HelloWorld() {
  return (
    <div className="p-8 text-center">
      <ClassComponent />
      <FuctionalComponents />
    </div>
  );
}

function FuctionalComponents() {
  return (
    <div className="p-8 text-center border">
      <h1 className="text-xl font-bold text-green-600">
        Hello, From Functional Component
      </h1>
    </div>
  );
}

// Using Arrow Function
// export const FuctionalComponents = () => {
//     return (
//         <div className="p-8 text-center border">
//             <h1 className="text-xl font-bold text-green-600">
//                 Hello, From Functional Component
//             </h1>
//         </div>
//     )
// }

class ClassComponent extends Component {
  render() {
    return (
      <div className="p-8 text-center border mb-2">
        <h1 className="text-xl font-bold text-green-600">
          Hello, From Class Component
        </h1>
      </div>
    );
  }
}
