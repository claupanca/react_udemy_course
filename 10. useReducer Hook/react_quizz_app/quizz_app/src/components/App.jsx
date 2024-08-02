import Body from "./Body";
import Header from "./Header";
import Welcome from "./Welcome";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Loader from "./Loader";
import Error from "./Error";
import Finished from "./Finished";

import { useQuizz } from "../context/QuizzContext";

export default function App() {
  const { status } = useQuizz();

  return (
    <div className="app">
      <Header />
      <Body>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Welcome />}
        {status === "active" && (
          <>
            <ProgressBar />
            <Question />
            <Timer />
          </>
        )}
        {status === "finished" && <Finished />}
      </Body>
    </div>
  );
}
