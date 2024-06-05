import Number from "./Number";

function Numbers({ listOfMessages, message }) {
  const activeMessage = listOfMessages.indexOf(message);
  // console.log("activeMessage", activeMessage);

  // we are using the index to set the numbers class to active or not depending on what message is shown

  return (
    <div className="numbers">
      {listOfMessages.map((_, index) => (
        <Number
          key={index}
          number={index + 1}
          isActive={activeMessage >= index}
        />
      ))}
    </div>
  );
}

export default Numbers;
