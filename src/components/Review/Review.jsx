import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function Review() {
  const dispatch = useDispatch();
  const history = useHistory();
  const answers = useSelector((state) => state.answers);
  const [editing, setEditing] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleFinish = useCallback(() => {
    const answer = answers[editing];
    if (
      editing === "feeling" ||
      editing === "understanding" ||
      editing === "support"
    ) {
      if (newAnswer < 1 || newAnswer > 6 || !newAnswer) {
        alert("Please provide an answer between 1 and 6");
        return;
      }
    }
    dispatch({
      type: "UPDATE_ANSWER",
      payload: { question: editing, answer: newAnswer },
    });
    setEditing("");
  }, [answers, dispatch, editing, newAnswer]);

  const handleSubmit = useCallback(() => {
    axios
      .post("/feedback", answers)
      .then((results) => {
        dispatch({ type: "CLEAR_ANSWERS" });
        history.push("/comments");
      })
      .catch((error) => {
        console.log("Error POST 🙃/feedback", error);
      });
  }, [answers, dispatch, history]);

  const handleBack = () => {
    history.push("/comments");
  };
  return (
    <>
      <div>
        <Typography>Feelings: {answers.feeling}</Typography>
        <Typography>Understanding: {answers.understanding}</Typography>
        <Typography>Support: {answers.supported}</Typography>
        <Typography>Comments: {answers.comments}</Typography>
      </div>
      <div>
        <Button className="Button-back" onClick={handleBack}>
          Back
        </Button>
        <Button className="Button-submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}

export default Review;
