import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const ThankYouFeedback = () => {
  const [thankyou, setThankYou] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("inside ThankYouFeedback handleclick", handleClick);
    if (thankyou != "") {
      dispath({
        type: "SET_THANKYOUFEEDBACK",
        payload: thankyou,
      });
      setThankYou("");
      history.push("/admin");
    } else {
      alert("Please select a number");
    }
  };

  const handleChange = (event) => {
    if (thankyou + event.target.value <= 5 && event.target.value >= 0) {
      setThankYou(event.target.value);
    }
  };
  return (
    <>
      <section className="question__section">
        <h1 className="question-header">THANK YOU!</h1>
        <label className="question-label">ThankYou?</label>
        <input
          className="question-input"
          value={thankyou}
          onChange={(event) => setThankYou(Number(event.target.value))}
          type="number"
        />
        <Button onClick={handleClick} variant="filled">
          Next
        </Button>
      </section>
    </>
  );
};

export default ThankYouFeedback;

// Page 5
