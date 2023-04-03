import "./Admin.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";

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
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Feeling</TableCell>
                  <TableCell>Understanding</TableCell>
                  <TableCell>Support</TableCell>
                  <TableCell>ThankYou</TableCell>
                  <TableCell>Flag</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
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
                    <TableRow
                      key={id}
                      className={flagged ? "flagged" : "not-flagged"}
                    >
                      <TableCell>{feeling}</TableCell>
                      <TableCell>{understanding}</TableCell>
                      <TableCell>{support}</TableCell>
                      <TableCell>{comments}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={() => handleFlagFeedback(id)}
                        >
                          Flag
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => popupDeleteConfirmation(id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    );
  };
}
export default Admin;
