import { act, createContext, useContext, useEffect, useReducer } from "react";

const QuizzContext = createContext();

const initialState = {
  questions: [],
  status: null,
  current: 0,
  points: 0,
  answer: null,
  secondsRemaining: 0,
};

const SECS_PER_QUESTION = 30;

function reducer(currState, action) {
  // console.log("currState", currState);
  // console.log("action", action);

  switch (action.type) {
    case "status/loading":
      return { ...currState, status: "loading" };
    case "dataRecieved":
      return { ...currState, status: "ready", questions: action.payload };
    case "status/ready":
      return { ...currState, status: "ready" };
    case "status/error":
      return { ...currState, status: "error" };
    case "startQuizz":
      return {
        ...currState,
        status: "active",
        secondsRemaining: currState.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const currentQuestion = currState.questions[currState.current];
      const correctOption = currentQuestion.correctOption;
      const isAnswerCorrect = action.payload === correctOption;

      console.log("currentQuestion", currentQuestion);
      console.log("correctOpti", correctOption);
      console.log("isAnswreCorr", isAnswerCorrect);
      console.log("action payload", action.payload);

      return {
        ...currState,
        answer: action.payload,
        points: isAnswerCorrect
          ? currState.points + currentQuestion.points
          : currState.points,
      };
    case "nextQuestion":
      return { ...currState, current: currState.current + 1, answer: null };
    case "timer":
      return {
        ...currState,
        secondsRemaining: currState.secondsRemaining - 1,
        status: currState.secondsRemaining - 1 == 0 ? "finished" : "active",
      };
    case "stopQuizz":
      return { ...currState, status: "finished" };
    case "restart":
      return {
        ...currState,
        status: "ready",
        current: 0,
        answer: null,
        points: 0,
        secondsRemaining: 10,
      };
    default:
      throw new Error("Something went Wrong");
  }
}

function QuizzProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, current, points, answer, secondsRemaining } =
    state;

  useEffect(() => {
    async function getQuestions() {
      dispatch({ type: "status/loading" });
      try {
        const res = await fetch("http://localhost:3000/questions");

        if (!res.ok) {
          dispatch({ type: "status/error" });
          throw new Error("Something went wrong");
        }

        const data = await res.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch (err) {
        console.log("error", err.message);
      } finally {
        dispatch({ type: "status/ready" });
      }
    }
    getQuestions();
  }, []);

  return (
    <QuizzContext.Provider
      value={{
        questions: questions,
        status: status,
        dispatch: dispatch,
        current: current,
        points: points,
        answer: answer,
        secondsRemaining: secondsRemaining,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
}

function useQuizz() {
  const context = useContext(QuizzContext);
  if (context === undefined)
    throw new Error("Context used outside QuizzProvider");
  return context;
}

export { QuizzProvider, useQuizz };
