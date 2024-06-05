import Button from "./Button";

function Buttons({ handleClick }) {
  function handleButtonClick(e) {
    console.log("button click from Buttons", e);
    handleClick(e);
  }

  return (
    <div className="buttons">
      <Button handleClick={handleButtonClick} action="prev" />
      <Button handleClick={handleButtonClick} action="next" />
    </div>
  );
}

export default Buttons;
