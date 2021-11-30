import React from "react";
import ReactDOM from "react-dom";
import {
  Provider
} from "react-redux";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/index.css";
import "./assets/css/theme.css";
import Layout from "./components/layout/Layout";
import {
  store
} from "./components/redux/store";
import reportWebVitals from "./reportWebVitals";

document.title = "My CRM";

ReactDOM.render( <
  React.StrictMode >
  <
  Provider store = {
    store
  } >
  <
  Layout / >
  <
  /Provider> < /
  React.StrictMode > ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();