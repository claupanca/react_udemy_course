import { useState, useEffect } from "react";

import Options from "./Options";

export default function Question({
  question,
  dispatch,
  answer,
  current,
  numberOfQuestions,
}) {
  const lastQuestion = current === numberOfQuestions - 1;

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />

      {/* if the last question is displayed, we don't show the Next button */}
      {!lastQuestion
        ? answer != null && (
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "nextQuestion" })}
            >
              Next
            </button>
          )
        : answer != null && (
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "stopQuizz" })}
            >
              Finish
            </button>
          )}
    </div>
  );
}
