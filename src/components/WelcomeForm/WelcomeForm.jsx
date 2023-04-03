import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

function Welcome() {
  const history = useHistory();
  // go to first feedback page
  const handleStart = () => {
    history.push("/feeling");
  };
  return <Button onClick={handleStart}>Start</Button>;
}

export default Welcome;
// Page 1
