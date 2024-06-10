import { useState } from "react";
import Card from "./Card";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  const [revealId, setRevealId] = useState(0);

  function handleClick(id) {
    console.log("click handled - id", id);
    setRevealId((prevState) => Number(id));
  }

  console.log("revealId", revealId);

  return (
    <div className="container">
      {questions.map((question) => {
        return (
          <Card
            key={question.id}
            item={question}
            revealId={revealId}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
