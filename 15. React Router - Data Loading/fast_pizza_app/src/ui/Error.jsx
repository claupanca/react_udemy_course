import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const navigate = useNavigate();

  // we use this to get the Error Message
  const error = useRouteError();
  console.log("error message", error.data || error.message);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message || error.data}</p>
      {/* <button onClick={() => navigate(-1)}>&larr; Go back</button> */}

      <LinkButton onClick={() => navigate(-1)}>&larr; Go Back</LinkButton>
    </div>
  );
}

export default Error;
