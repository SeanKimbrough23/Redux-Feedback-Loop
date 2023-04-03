import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

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

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(answers).map(([question, answer]) => (
            <tr key={question}>
              <td>{question}</td>
              <td>
                {editing === question ? (
                  <input
                    type={
                      ["feeling", "understanding", "support"].includes(question)
                        ? "number"
                        : "text"
                    }
                    value={newAnswer}
                    onChange={(event) => setNewAnswer(event.target.value)}
                  />
                ) : (
                  answer
                )}
              </td>
              <td>
                {editing === question ? (
                  <Button onClick={handleFinish}>Done</Button>
                ) : (
                  <Button onClick={() => setEditing(question)}>Edit</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className="Button-submit" onClick={handleSubmit}>
        Submit
      </Button>
    </section>
  );
}

export default Review;
