import "./Admin.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {
  const [feedbackList, setFeedbackList] = useState([]);
  const dispatch = useDispatch();

  const fetchFeedback = () => {
    axios
      .get("/feedback")
      .then((result) => {
        dispatch({
          type: "SET_FEEDBACK",
          payload: result.data,
        });
      })
      .catch((error) => {
        console.log("Error GET /feedback", error);
      });

    const deleteFeedback = (id) => {
      axios
        .delete(`/feedback/${id}`)
        .then((result) => {
          console.log("Delete feedback with id", id);
          fetchFeedback();
        })
        .catch((error) => {
          console.log("Error DELETE /feedback", error);
        });

      const popupDeleteConfirmation = (id) => {
        Swal.fire({
          title: "Are you positive?",
          text: "You won't be able to change this!",
          icon: "warning",
          showCancelButton: true,
          cancelButtonColor: "",
          confirmButtonColor: "",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Feedback has been removed.");
            deleteFeedback(id);
          }
        });
      };

      useEffect(() => {
        fetchFeedback();
      }, []);
    };
    return (
      <>
        <div className="table-container">
          <h1>Dashboard</h1>
          <table className="feedback-table">
            <thead className="feedback_table_head">
              <tr>
                <th>Feeling</th>
                <th>Understanding</th>
                <th>Support</th>
                <th>ThankYou</th>
                <th>Flag</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="feedback_table_body">
              {feedbackList.map((feedback) => {
                const {
                  id,
                  feeling,
                  understanding,
                  support,
                  comments,
                  flagged,
                } = feedback; // deconstructing
                return (
                  <tr key={id} className={flagged ? "flagged" : "not-flagged"}>
                    <td>{feeling}</td>
                    <td>{understanding}</td>
                    <td>{support}</td>
                    <td>{comments}</td>
                    <td>
                      <button
                        className="flag-btn"
                        onClick={() => handleFlagFeedback(id)}
                      >
                        Flag
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => popupDeleteConfirmation(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  };
}
export default Admin;
