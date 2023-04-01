import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SupportedForm = () => {
  const [supported, setSupported] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("inside supportedFrom", handleClick);
    if (supported != "") {
      dispath({
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
      <div className="button-container">
        <Button onClick={handleClick} variant="filled">
          Next
        </Button>
      </div>
    </>
  );
};

export default SupportedForm;

// Page 3
