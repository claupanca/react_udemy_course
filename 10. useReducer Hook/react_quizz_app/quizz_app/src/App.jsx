import { useState } from "react";

import Body from "./Body";
import Header from "./Header";
import Welcome from "./Welcome";
import Timer from "./Timer";

export default function App() {
  const [welcome, setWelcome] = useState(true);
  const [time, setTime] = useState(10);

  function handleStart() {
    setWelcome((prevState) => !prevState);

    const timer = function () {
      setTime((prevState) => prevState - 1);
    };

    setInterval(timer, 1000);

    if (time <= 0) {
      clearInterval(timer);
    }
  }

  return (
    <div className="app">
      <Header />
      {welcome && <Welcome onStartClick={handleStart} />}
      {!welcome && (
        <Body>
          <Timer time={time} />
        </Body>
      )}
    </div>
  );
}
