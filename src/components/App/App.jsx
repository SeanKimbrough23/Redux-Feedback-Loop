import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Welcome from "../WelcomeForm/WelcomeForm";
import FeelingForm from "../FeelingForm/FeelingForm";
import ThankYouFeedback from "../ThankYouFeedback/ThankYouFeedback";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import SupportedForm from "../SupportedForm/SupportedForm";
import CommentsForm from "../CommentsForm/CommentsForm";
import Admin from "../Admin/Admin";
import Review from "../Review/Review";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          {/* Page 1 */}
          <Welcome />
        </Route>
        <Route path="/feeling" exact>
          {/* Page 2 */}
          <FeelingForm />
        </Route>
        <Route path="/understanding" exact>
          {/* Page 3 */}
          <UnderstandingForm />
        </Route>
        <Route path="/supported" exact>
          {/* Page 4*/}
          <SupportedForm />
        </Route>
        <Route path="/comments" exact>
          <CommentsForm />
        </Route>
        <Route path="/thankyou" exact>
          <ThankYouFeedback />
        </Route>
        <Route path="/review" exact>
          {/* Page 5 */}
          <Review />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
