import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

function Welcome() {
  const history = useHistory();
  // go to first feedback page
  const handleStart = () => {
    history.push("/feeling");
  };
  return (
    <>
      <section className="question__section">
        <h1 className="question-header">
          Please answer the following questions using 1-5
          <p>5 = Very Well</p>1 = Not At All
        </h1>
        <Button onClick={handleStart}>Start</Button>
      </section>
    </>
  );
}

export default Welcome;
// Page 1
