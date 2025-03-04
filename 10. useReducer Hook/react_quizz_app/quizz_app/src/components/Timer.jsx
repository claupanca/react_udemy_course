import { useEffect } from "react";
import { useQuizz } from "../context/QuizzContext";

export default function Timer() {
  const { secondsRemaining, dispatch } = useQuizz();

  //  we are going to initialize the timer as the component mounts
  useEffect(() => {
    console.log("Timer");
    const interval = function () {
      dispatch({ type: "timer" });
    };

    const id = setInterval(interval, 1000);

    // cleanup function
    return () => clearInterval(id);
  }, [dispatch]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining - Math.floor(secondsRemaining / 60) * 60;

  return (
    <div className="timer">
      <p>
        {minutes}:{seconds < 9 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
}
