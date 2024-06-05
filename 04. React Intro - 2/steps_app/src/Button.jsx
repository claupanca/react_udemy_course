function Button({ handleClick, action }) {
  return (
    <button onClick={handleClick} data-action={action}>
      <span data-action={action}>{action == "prev" ? "Previous" : "Next"}</span>
    </button>
  );
}

export default Button;
