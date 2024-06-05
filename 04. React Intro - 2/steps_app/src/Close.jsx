function Close({ handleClick, isOpen }) {
  function handleResetClick(e) {
    console.log("Reset Clicked");
    handleClick(e);
  }

  return (
    <div className="close" onClick={handleResetClick} data-action="open/close">
      {isOpen ? "Close" : "Open"}
    </div>
  );
}

export default Close;
