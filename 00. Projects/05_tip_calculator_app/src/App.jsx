import { useState } from "react";
import Satisfaction from "./Satisfaction";
import Reset from "./Reset";
import Bill from "./Bill";
import Result from "./Result";

function App() {
  const [bill, setBill] = useState("");
  const [myReview, setMyReview] = useState(0);
  const [friendReview, setFriendReview] = useState(0);

  function handleReset() {
    setBill((prevState) => "");
    setMyReview((prevState) => 0);
    setFriendReview((prevState) => 0);
  }

  return (
    <div className="calculator">
      <Bill bill={bill} onBillChange={setBill} />
      <Satisfaction value={myReview} onValueChange={setMyReview}>
        How did you like the service?
      </Satisfaction>
      <Satisfaction value={friendReview} onValueChange={setFriendReview}>
        How did your friend like the service?
      </Satisfaction>
      <Result bill={bill} myReview={myReview} friendReview={friendReview} />
      <Reset onResetClick={handleReset} />
    </div>
  );
}

export default App;
