export default function Card({ item, handleClick, revealId }) {
  function handleItemClick(e) {
    handleClick(e.currentTarget.id);
  }

  return (
    <div
      className={`card ${revealId === item.id ? "active" : ""}`}
      onClick={handleItemClick}
      id={item.id}
    >
      <h2>{revealId === item.id ? item.answer : item.question}</h2>
    </div>
  );
}
