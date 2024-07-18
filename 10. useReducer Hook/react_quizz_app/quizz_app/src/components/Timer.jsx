import { useEffect } from "react";

export default function Timer({ time, dispatch }) {
  //  we are going to initialize the timer as the component mounts
  useEffect(() => {
    console.log("TImer");
    const interval = function () {
      dispatch({ type: "timer" });
    };

    const id = setInterval(interval, 1000);

    // cleanup function
    return () => clearInterval(id);
  }, [dispatch]);

  const minutes = Math.floor(time / 60);
  const seconds = time - Math.floor(time / 60) * 60;

  return (
    <div className="timer">
      <p>
        {minutes}:{seconds < 9 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
}
