import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CommentsForm = () => {
  const [comments, setComments] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("inside CommentsFrom", handleClick);
    if (comments != "") {
      dispath({
        type: "SET_COMMENTS",
        payload: comments,
      });
      setComments("");
      history.push("/");
    } else {
      alert("Please select a number");
    }
  };

  const handleChange = (event) => {
    if (comments + event.target.value <= 5 && event.target.value >= 0) {
      setComments(event.target.value);
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

export default CommentsForm;

// Page 5
