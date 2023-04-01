import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const FeelingForm = () => {
  const [feeling, setFeeling] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (feeling != "") {
      dispath({
        type: "SET_FEELING",
        payload: feeling,
      });
      setFeeling("");
      history.push("/understanding");
    } else {
      alert("Please select a number");
    }
  };

  const handleChange = (event) => {
    if (feeling + event.target.value <= 5 && event.target.value >= 0) {
      setFeeling(event.target.value);
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

export default FeelingForm;

//Page 1
