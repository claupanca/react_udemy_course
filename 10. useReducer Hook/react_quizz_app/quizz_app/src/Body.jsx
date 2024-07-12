import ProgressBar from "./ProgressBar";
import Questions from "./Questions";
import Timer from "./Timer";

export default function Body() {
  return (
    <div className="main">
      <ProgressBar />
      <Questions />
      <Timer />
    </div>
  );
}
