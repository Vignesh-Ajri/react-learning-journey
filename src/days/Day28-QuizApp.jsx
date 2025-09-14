import React from "react";
import Quiz from "../projects/quiz-app/Quiz";

function QuizApp() {
  return (
    <div className="bg-gray-100 p-5">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-4 mb-2">
        Simple Quiz App
      </h3>
      <div className="flex items-center justify-center mt-10">
        <Quiz />
      </div>
    </div>
  );
}

export default QuizApp;
