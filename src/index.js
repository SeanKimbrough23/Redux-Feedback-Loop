import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const answers = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return { ...state, ...action.payload };
    case "UPDATE_ANSWER":
      const newState = { ...state };
      newState[action.payload.question] = action.payload.answer;
      return newState;
    case "CLEAR_ANSWERS":
      return {};
    default:
      return state;
  }
};

const storeFeedback = createStore(
  combineReducers({ answers }),
  applyMiddleware(logger)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeFeedback}>
      <App />
    </Provider>
  </React.StrictMode>
);
