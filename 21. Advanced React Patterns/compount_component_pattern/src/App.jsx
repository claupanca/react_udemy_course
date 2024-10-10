import Counter, { Count, Decrease, Increase, Label } from "./Counter";

function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* Prop Drilling -- DO NOT USE
      <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      {/* With Childrens as SEPARATE FUNCTIONS */}
      <Counter>
        <Label>This is a higly flexible counter</Label>
        <Decrease />
        <Count />
        <Increase />
      </Counter>

      <div>
        <Counter>
          <Counter.Count />
          <Counter.Decrease />
          <Counter.Increase />
          {/* we leave the LABEL out */}
        </Counter>
      </div>
    </div>
  );
}

export default App;
