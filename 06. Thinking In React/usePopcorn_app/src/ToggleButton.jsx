export default function ToggleButton({ isOpen, setIsOpen }) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "-" : "+"}
    </button>
  );
}
