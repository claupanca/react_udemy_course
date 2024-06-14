import Numbers from "./Numbers";
import Message from "./Message";
import Buttons from "./Buttons";
import Close from "./Close";
import { useState } from "react";

const MESSAGES = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "TEEEEST - 4th message 🤑",
];

function App() {
  const [listOfMessages, setListOfMessages] = useState(MESSAGES);

  const [message, setMessage] = useState(listOfMessages[0]);

  const [isOpen, setIsOpen] = useState(true);

  console.log("message:", message);

  function handleBtnClick(e) {
    console.log("btn is clicked", e.target.dataset.action);
    const action = e.target.dataset.action;
    const messageIndex = listOfMessages.indexOf(message);

    if (action == "next") {
      // we have to check if the actual message is the last one
      // console.log("messageIndex", messageIndex);
      // console.log("messageList", listOfMessages.length - 1);
      if (messageIndex !== listOfMessages.length - 1) {
        setMessage(listOfMessages[messageIndex + 1]);
      } else {
        console.log("end of message List");
      }
    }

    if (action == "prev") {
      if (messageIndex !== 0) {
        setMessage(listOfMessages[messageIndex - 1]);
      } else {
        console.log("end of message List");
      }
    }

    //  Best PRACTICE to update state based on previous STATE
    if (action == "open/close") {
      console.log("action", action);
      setIsOpen((prevState) => !prevState);
    }

    // if (action == "Open") {
    //   console.log("action", action);
    //   setIsOpen(true);
    // }
  }

  return (
    <>
      <div className="steps" style={{ display: `${isOpen ? "" : "none"}` }}>
        <Numbers listOfMessages={listOfMessages} message={message} />
        <Message step={listOfMessages.indexOf(message) + 1}>{message}</Message>
        <Buttons handleClick={handleBtnClick} />
      </div>
      <Close handleClick={handleBtnClick} isOpen={isOpen} />
    </>
  );
}

export default App;
