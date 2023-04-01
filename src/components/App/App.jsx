import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

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
          <FeelingForm />
        </Route>
        <Route path="/understanding" exact>
          <UnderstandingForm />
        </Route>
        <Route path="/supported" exact>
          <SupportedForm />
        </Route>
        <Route path="/comments" exact>
          <CommentsForm />
        </Route>
        <Route path="/thankyou" exact>
          <ThankYouFeedback />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
      </Router>
      ;
    </div>
  );
}

export default App;
