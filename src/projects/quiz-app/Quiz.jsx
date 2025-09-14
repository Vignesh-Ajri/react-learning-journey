import { useState } from "react";
import Question from "./Questions";

const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Multi Language",
    ],
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "none of the above"],
    answer: "1995",
  },
  {
    question: "React is mainly used for?",
    options: ["Database", "Designing", "User Interface", "Networking"],
    answer: "User Interface",
  },
];

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-[400px] text-center">
      {showScore ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            You scored {score} out of {questions.length}
          </h2>
          <button
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <Question
          data={questions[currentQ]}
          onAnswer={handleAnswer}
          currentQ={currentQ}
          total={questions.length}
        />
      )}
    </div>
  );
}
