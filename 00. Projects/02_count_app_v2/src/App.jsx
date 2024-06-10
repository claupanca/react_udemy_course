import { useState, useEffect } from "react";
import Step from "./Step";
import Count from "./Count";
import Message from "./Message";
import Reset from "./Reset";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  function handleStep(value) {
    console.log("Step Handled", value);
    setStep((prevState) => value);
  }

  function handleCountInput(value) {
    console.log("Count Input Handled", value);
    setCount((prevState) => value);
  }

  function handleCountButtons(action) {
    console.log("Count Buttons Handled", action);
    if (action === "-") {
      setCount((prevState) => prevState - 1);
    }
    if (action === "+") {
      setCount((prevState) => prevState + 1);
    }
  }

  function handleReset() {
    setStep((prevState) => 1);
    setCount((prevState) => 0);
  }

  useEffect(() => {
    console.log("Message should update");
    const today = new Date();
    const newDate = today.setDate(today.getDate() + count * step);
    console.log("nnew date", newDate);
    console.log("today", today.toDateString());
    setMessage((prevState) => today.toDateString());
  }, [count, step]);

  return (
    <div className="container">
      <Step step={step} handleStep={handleStep} />
      <Count
        count={count}
        handleCountType={handleCountInput}
        handleCountButtons={handleCountButtons}
      />
      <Message message={message} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

export default App;
