export default function Action({ actionText, dispatch, availability = true }) {
  return (
    <div className="action">
      <button disabled={!availability} onClick={dispatch}>
        {actionText}
      </button>
    </div>
  );
}
