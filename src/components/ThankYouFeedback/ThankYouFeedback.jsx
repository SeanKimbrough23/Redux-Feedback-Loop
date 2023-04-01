import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

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
      history.push("/comments");
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
      <div className="button-container">
        <Button onClick={handleClick} variant="filled">
          Next
        </Button>
      </div>
    </>
  );
};

export default ThankYouFeedback;

// Page 4
