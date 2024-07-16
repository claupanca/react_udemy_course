import { useState, useRef } from "react";

import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Timer from "./Timer";

import tempQuestions from "./assets/questions.json";

const questions = tempQuestions.questions;

export default function Body({ children }) {
  const [question, setQuestion] = useState(questions[0]);
  const [selected, setSelected] = useState(null);

  const total = questions.reduce((acc, item) => acc + item.points, 0);
  const answer = question.correctOption;

  let counter = useRef(0);
  let points = useRef(0);

  let start = useRef("");

  function handleNextClick() {
    start.current = "start";

    counter.current = counter.current + 1;
    if (selected === answer) {
      console.log("points", points);
      points.current = points.current + question.points;
    }
    setQuestion((prevState) => questions[counter.current]);
    setSelected(null);
  }

  return (
    <div className="main">
      <ProgressBar
        questions={questions.length}
        current={counter.current + 1}
        points={points.current}
        total={total}
      />
      <Question
        question={question}
        onNextClick={handleNextClick}
        answer={answer}
        selected={selected}
        onItemClick={setSelected}
      />
      {children}
    </div>
  );
}
