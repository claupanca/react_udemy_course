import { useEffect, useState, useReducer, act } from "react";

import Body from "./Body";
import Header from "./Header";
import Welcome from "./Welcome";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Loader from "./Loader";
import Error from "./Error";
import Finished from "./Finished";

const initialState = {
  questions: [],
  // states of the game:
  // loading, error, ready, active, finished
  status: "loading",
  current: 0,
  answer: null,
  points: 0,
};

// We are using the useReducer reducer function for state management
function reducer(currState, action) {
  console.log("currState", currState);
  console.log("action", action);

  // setting up Switch cases for each dispatched action
  switch (action.type) {
    case "setQuestions":
      return {
        ...currState,
        questions: action.payload,
        // we also set the status here, after the data is recieved
        status: "ready",
      };
    case "dataError":
      return { ...currState, status: "error" };
    case "startQuizz":
      return {
        ...currState,
        status: "active",
      };
    case "newAnswer":
      const currentQuestion = currState.questions[currState.current];
      const correctOption = currentQuestion.correctOption;
      const isAnswerCorrect = action.payload === correctOption;

      return {
        ...currState,
        answer: action.payload,
        points: isAnswerCorrect
          ? currState.points + currentQuestion.points
          : currState.points,
      };

    case "nextQuestion":
      return { ...currState, current: currState.current + 1, answer: null };

    case "stopQuizz":
      return { ...currState, status: "finished" };
    case "restart":
      return {
        ...currState,
        status: "ready",
        current: 0,
        answer: null,
        points: 0,
      };
    default:
      return { ...currState };
  }
}

export default function App() {
  // const [question, setQuestions] = useState({});

  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, current, answer, points } = state;

  const numberOfQuestions = questions.length;
  const maxPoints = questions.reduce((acc, item) => acc + item.points, 0);

  // console.log("questions", questions);

  // Fetch the questions from the json-server (fake api)
  useEffect(() => {
    dispatch({ type: "setStatus", payload: "loading" });
    async function getQuestions() {
      try {
        const res = await fetch("http://localhost:3000/questions");

        if (!res.ok) {
          dispatch({ type: "dataError" });
          throw new Error("Failed to Fetch data");
        }

        const data = await res.json();
        console.log("data", data);
        // dispatch({ type: "setStatus", payload: "ready" });
        //instead of dispatching 2 action, we dispatch just the setQuestions and set the status in the reducer
        dispatch({ type: "setQuestions", payload: data });
      } catch (error) {
        dispatch({ type: "dataError" });
        console.log(error.message);
      }
    }

    getQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Body>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Welcome
            numberOfQuestions={numberOfQuestions}
            onStartClick={() => dispatch({ type: "startQuizz" })}
          />
        )}
        {status === "active" && (
          <>
            <ProgressBar
              numberOfQuestions={numberOfQuestions}
              points={points}
              current={current + 1}
              total={maxPoints}
            />
            <Question
              question={questions[current]}
              dispatch={dispatch}
              answer={answer}
              current={current}
              numberOfQuestions={numberOfQuestions}
            />
            <Timer />
          </>
        )}
        {status === "finished" && (
          <Finished points={points} maxPoints={maxPoints} dispatch={dispatch} />
        )}
      </Body>
    </div>
  );
}
