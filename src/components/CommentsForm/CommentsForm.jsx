import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const CommentsForm = () => {
  const [comments, setComments] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("inside CommentsForm", handleClick);
    if (comments != "") {
      dispatch({
        type: "SET_COMMENTS",
        payload: comments,
      });
      setComments("");
      history.push("/thankyou");
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
      <section className="question__section">
        <h1 className="question-header">Any Comments you want to leave?</h1>
        <label className="question-label">Comments?</label>
        <input
          className="question-input"
          value={comments}
          onChange={(event) => setComments(event.target.value)}
          type="text"
        />
        <Button onClick={handleClick} variant="filled">
          Next
        </Button>
      </section>
    </>
  );
};

export default CommentsForm;

// Page 4
