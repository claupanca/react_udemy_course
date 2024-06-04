import { useState, useEffect } from "react";
import Message from "./Message";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const response = await res.json();
    console.log(response.slip.advice);

    setAdvice(response.slip.advice);
    // setAdvice((prevState) => {
    //   return response.slip.advice;
    // });
    setCount((prevState) => prevState + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message message={advice} />
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </div>
  );
}

export default App;
