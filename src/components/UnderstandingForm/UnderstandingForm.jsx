import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const UnderstandingForm = () => {
  const [understanding, setUnderstanding] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("inside understandingform handleclick", handleClick);
    if (understanding != "") {
      dispath({
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
    if (feeling + event.target.value <= 5 && event.target.value >= 0) {
      setUnderstanding(event.target.value);
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

export default UnderstandingForm;

//Page 2
