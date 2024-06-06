import { useState, useEffect } from "react";
import Step from "./Step";
import Count from "./Count";
import Datee from "./Datee";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(() => new Date());

  function handleStep(e) {
    console.log("step handler", e.target.dataset.action);
    const action = e.target.dataset.action;
    if (action === "-" && step !== 1) {
      setStep((prevState) => prevState - 1);
    }
    if (action === "+") {
      setStep((prevState) => prevState + 1);
    }
  }

  function handleCount(e) {
    console.log("count handler", e.target.dataset.action);
    const action = e.target.dataset.action;
    if (action === "-") {
      setCount((prevState) => prevState - 1);
    }
    if (action === "+") {
      setCount((prevState) => prevState + 1);
    }
  }

  // Not NEEDED since the component will not store the date. Date will be computed when Count is changing
  // useEffect(() => {
  //   setDate((prevState) => {
  //     // console.log("count", count, "step", step);
  //     // console.log("prev Date", prevState);
  //     // console.log(
  //     //   "new date",
  //     //   new Date(prevState.setDate(prevState.getDate() + count * step))
  //     // );
  //     return new Date(prevState.setDate(prevState.getDate() + count * step));
  //   });
  // }, [count]);

  return (
    <div className="container">
      <Step step={step} handleClick={handleStep} />
      <Count count={count} handleClick={handleCount} />
      <Datee count={count} step={step} />
    </div>
  );
}

export default App;
