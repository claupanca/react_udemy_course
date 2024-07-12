import { act, useReducer, useState } from "react";

function reducer(currState, action) {
  console.log("currentState", currState);
  console.log("action", action);
  // if (action.type === "dec") {
  //   return { ...currState, count: currState.count - currState.step };
  // }
  // if (action.type === "inc") {
  //   return { ...currState, count: currState.count + currState.step };
  // }
  // if (action.type === "setCount") {
  //   return { ...currState, count: action.payload };
  // }
  // if (action.type === "setStep") {
  //   return { ...currState, step: action.payload };
  // }
  switch (action.type) {
    case "dec":
      return { ...currState, count: currState.count - currState.step };
    case "inc":
      return { ...currState, count: currState.count + currState.step };
    case "setCount":
      return { ...currState, count: action.payload };
    case "setStep":
      return { ...currState, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Unknown Action");
  }
}

function DateCounter() {
  // const [step, setStep] = useState(1);
  // we have passed the step state management to the useReducer hook
  // and combined the count and step
  const initialState = { count: 0, step: 1 };

  // const [count, setCount] = useState(0);
  //  we have transformed the useState to a reducer
  //  and combined the count and step into the State Object
  const [state, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);

    //

    // dispatch({ type: "dec", payload: 1 });
    // we don;t need payload anymore since the step is handled by the useReducer
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);

    //

    // dispatch({ type: "inc", payload: 1 });
    // we don;t need payload anymore since the step is handled by the useReducer
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
