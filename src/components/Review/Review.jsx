import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function Review() {
  const dispatch = useDispatch();
  const history = useHistory();

  const answers = useSelector((store) => store.answers); // redux reducer

  const [questionToEdit, setQuestionToEdit] = useState(""); // keeps track of what question is being edited ("" if not editing)
  const [newAnswer, setNewAnswer] = useState(""); // local state to track edit input

  const findInputType = (question) => {
    if (
      question === "feeling" ||
      question === "understanding" ||
      question === "support"
    ) {
      return "number";
    } else if (question === "comments") {
      return "text";
    } else {
      console.log("Something wrong finding input");
    }
  };
  // Helper function for conditionally rendering an edit field
  const renderEditField = (question) => {
    return (
      <input
        type={findInputType(question)}
        value={newAnswer}
        onChange={(event) => setNewAnswer(event.target.value)}
      />
    );
  };
  const handleFinish = () => {
    // validating edited input
    switch (questionToEdit) {
      case "feeling":
      case "understanding":
      case "support":
        if (newAnswer < 1 || newAnswer > 6 || !newAnswer) {
          alert("Please provide an answer between 1 and 6");
          return;
        }
    }

    dispatch({
      type: "UPDATE_ANSWER",
      payload: { question: questionToEdit, answer: newAnswer },
    });

    // clear inputs
    setQuestionToEdit("");
    setNewAnswer("");
  };

  /**
   * Posts user feedback to server side
   * On success, resets answer reducer, goes to next page
   */
  const handleSubmit = () => {
    axios
      .post("/feedback", answers)
      .then(() => {
        dispatch({ type: "CLEAR_ANSWERS" });
        history.push("/thankyou");
      })
      .catch((error) => {
        console.log("Error POST /feedback", error);
      });
  };

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
          {Object.keys(answers).map((question, i) => {
            const answer = answers[question];
            const isEdit = question === questionToEdit;

            return (
              <tr key={i}>
                <td>{question}</td>
                <td>{isEdit ? renderEditField(question) : answer}</td>
                <td>
                  {isEdit ? (
                    <Button onClick={handleFinish}> Done </Button>
                  ) : (
                    <Button onClick={() => setQuestionToEdit(question)}>
                      Edit
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
}

export default Review;
// Page 5
