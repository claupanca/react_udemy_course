import { useState, useRef } from "react";

import tempQuestions from "../assets/questions.json";

const questions = tempQuestions.questions;

export default function Body({ children }) {
  const [welcome, setWelcome] = useState(true);
  const [question, setQuestion] = useState(questions[0]);
  const [selected, setSelected] = useState(null);

  const total = questions.reduce((acc, item) => acc + item.points, 0);
  const answer = question.correctOption;

  let counter = useRef(0);
  let points = useRef(0);

  let start = useRef("");

  function handleStartClick() {
    setWelcome((prevState) => !prevState);
  }

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

  return <main className="main">{children}</main>;
}
