export default function ProgressBar() {
  return (
    <div className="progress">
      <progress value={8} max={15}></progress>
      <h4>Question x/y</h4>
      <h5>Z/W Points</h5>
    </div>
  );
}
