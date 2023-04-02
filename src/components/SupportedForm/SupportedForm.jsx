import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const SupportedForm = () => {
  const [supported, setSupported] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("inside supportedFrom", handleClick);
    if (supported != "") {
      dispatch({
        type: "SET_SUPPORTED",
        payload: supported,
      });
      setSupported("");
      history.push("/thankyou");
    } else {
      alert("Please select a number");
    }
  };

  const handleChange = (event) => {
    if (supported + event.target.value <= 5 && event.target.value >= 0) {
      setSupported(event.target.value);
    }
  };
  return (
    <>
      <section className="question__section">
        <h1 className="question-header">How well are you being supported?</h1>
        <label className="question-label">Support?</label>
        <input
          className="question-input"
          value={supported}
          onChange={(event) => setSupported(Number(event.target.value))}
          type="number"
        />
        <Button onClick={handleClick} variant="filled">
          Next
        </Button>
      </section>
    </>
  );
};

export default SupportedForm;

// Page 3
