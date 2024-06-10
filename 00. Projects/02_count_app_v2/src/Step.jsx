export default function Step({ step, handleStep }) {
  function handleSlide(e) {
    console.log(e.currentTarget.value);
    handleStep(e.currentTarget.value);
  }

  return (
    <div className="step">
      <input
        type="range"
        min="1"
        max="9"
        value={step}
        onChange={handleSlide}
      ></input>
      <span>{step}</span>
    </div>
  );
}
