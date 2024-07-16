import { useState, useEffect } from "react";

export default function Question({
  question,
  onNextClick,
  answer,
  selected,
  onItemClick,
}) {
  console.log(question);

  return (
    <div>
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((item, index) => (
          <button
            key={item}
            className={`btn btn-option ${selected === index ? "answer" : ""} ${
              selected !== null ? (answer === index ? "correct" : "wrong") : ""
            }`}
            disabled={selected !== null ? true : false}
            onClick={() => onItemClick(index)}
          >
            {item}
          </button>
        ))}
        {/* <button className="btn btn-option correct">Opt1</button>
        <button className="btn btn-option wrong">Opt2</button>
        <button className="btn btn-option answer">Opt3</button>
        <button className="btn btn-option">Opt4</button> */}
      </div>
      <button className="btn btn-ui" onClick={onNextClick}>
        Next
      </button>
    </div>
  );
}
