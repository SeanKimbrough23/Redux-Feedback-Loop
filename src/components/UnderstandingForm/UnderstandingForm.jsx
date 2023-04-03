import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const UnderstandingForm = () => {
  const [understanding, setUnderstanding] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("inside understandingform handleclick", handleClick);
    if (understanding != "") {
      dispatch({
        type: "SET_UNDERSTANDING",
        payload: understanding,
      });
      setUnderstanding("");
      history.push("/supported");
    } else {
      alert("Please select a number");
    }
  };

  const handleChange = (event) => {
    if (understanding + event.target.value <= 5 && event.target.value >= 0) {
      setUnderstanding(event.target.value);
    }
  };
  return (
    <>
      <section className="question__section">
        <h1 className="question-header">
          How well are you understanding the content?
        </h1>
        <label className="question-label">Understanding?</label>
        <input
          className="question-input"
          value={understanding}
          onChange={(event) => setUnderstanding(Number(event.target.value))}
          type="number"
        />
        <Button onClick={handleClick} variant="filled">
          Next
        </Button>
      </section>
    </>
  );
};

export default UnderstandingForm;

//Page 3
