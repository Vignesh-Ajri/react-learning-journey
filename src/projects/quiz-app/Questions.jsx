import React from "react";

function Questions({ data, onAnswer, currentQ, total }) {
  return (
    <div className="grid">
      <h2 className="text-xl font-semibold mb-4">
        Q{currentQ + 1}. {data.question}
      </h2>
      <div className="flex flex-col gap-2">
        {data.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(option)}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-4 text-gray-500 text-sm">
        Question {currentQ + 1} of {total}
      </p>
    </div>
  );
}

export default Questions;
