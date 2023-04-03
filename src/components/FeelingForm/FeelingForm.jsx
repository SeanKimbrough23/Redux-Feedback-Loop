import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const FeelingForm = () => {
  const [feeling, setFeeling] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (feeling != "") {
      dispatch({
        type: "SET_FEELING",
        payload: feeling,
      });
      setFeeling("");
      history.push("/understanding");
    } else {
      alert("Please select a number");
    }
  };

  const handleChange = () => {
    if (feeling < 1 || feeling > 6 || !feeling) {
      alert("Please provide an answer between 1 and 6");
    }
  };
  return (
    <>
      <section className="question__section">
        <h1 className="question-header">How are you feeling today?</h1>
        <label className="question-label">Feeling?</label>
        <input
          className="question-input"
          value={feeling}
          onChange={(event) => setFeeling(Number(event.target.value))}
          type="number"
        />
        <Button onClick={handleClick} variant="filled">
          Next
        </Button>
      </section>
    </>
  );
};

export default FeelingForm;

//Page 2
