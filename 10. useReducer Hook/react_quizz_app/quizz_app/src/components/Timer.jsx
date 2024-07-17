import { useRef } from "react";

export default function Timer({ time }) {
  // console.log("minutes", Math.floor(seconds / 60));
  // console.log("seconds", seconds - Math.floor(seconds / 60) * 60);

  const minutes = Math.floor(time / 60);
  const seconds = time - Math.floor(time / 60) * 60;

  return (
    <div className="timer">
      <p>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
}
