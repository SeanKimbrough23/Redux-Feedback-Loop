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
    history.push("/welcome");
  };
  // const handleChange = (event) => {
  //   if (thankyou + event.target.value <= 5 && event.target.value >= 0) {
  //     setThankYou(event.target.value);
  //   }
  // };
  return (
    <>
      <section className="question__section">
        <h1 className="question-header">THANK YOU!</h1>
        {/* <label className="question-label">Leave New Feedback</label> */}
        {/* <input
          className="question-input"
          value={thankyou}
          onChange={(event) => setThankYou(event.target.value)}
          type=""
        /> */}
        <Button onClick={handleClick} variant="filled">
          Leave New Feedback
        </Button>
      </section>
    </>
  );
};

export default ThankYouFeedback;

// Page 6
