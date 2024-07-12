import questions from "./assets/questions.json";
import Question from "./Question";

export default function Questions() {
  console.log(questions);
  return (
    <div>
      <Question />
    </div>
  );
}
