import { createContext, useContext, useState } from "react";

// 1.Create Context
const CountContext = createContext();

// 2. Create Parent Component
export default function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CountContext.Provider
      value={{
        count: count,
        increase: increase,
        decrease: decrease,
      }}
    >
      <span>{children}</span>
    </CountContext.Provider>
  );
}

// 3. Create Children Components
function Increase() {
  const context = useContext(CountContext);
  const { increase } = context;

  return <button onClick={increase}>+</button>;
}
function Decrease() {
  const context = useContext(CountContext);
  const { decrease } = context;

  return <button onClick={decrease}>-</button>;
}
function Count() {
  const context = useContext(CountContext);
  const { count } = context;

  return <span>{count}</span>;
}
function Label({ children }) {
  // const context = useContext(CountContext);

  return <span>{children}</span>;
}

// Use this for chidlrens as SEparate FUNCTIONS
export { Counter, Count, Increase, Decrease, Label };

// Instead of Exports, we can add the childrens as PARENT props
Counter.Count = Count;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
Counter.Label = Label;
