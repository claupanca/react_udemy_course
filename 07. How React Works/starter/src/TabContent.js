import { useState } from "react";

export default function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes + 1);
  }

  function handleSuperInc() {
    // This WILL NOT WORK
    //  since it's batching them up and the RERENDER and COMMIT happens only 1 TIME
    // The STATE Update is ASYNCHRONOUS
    setLikes(likes + 1);
    setLikes(likes + 1);
    setLikes(likes + 1);

    // This will WORK
    //Since we are passing a CALLBACK function, the RERENDER will happen 3 times
    setLikes((prevState) => prevState + 1);
    setLikes((prevState) => prevState + 1);
    setLikes((prevState) => prevState + 1);
  }

  function handleUndoButton() {
    // These 2 state updates are BATCHED --> 1 component RERENDER
    setShowDetails(true);
    setLikes(0);
    // This log will show a 'STALE' state, it's the previous state since the component has not
    // been Rerendered so the state is not updated
    console.log(likes);
  }

  function handleUndoLater() {
    const x = setTimeout(() => {
      handleUndoButton();
    }, 2000);
  }

  console.log("Render");

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleSuperInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndoButton}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}
