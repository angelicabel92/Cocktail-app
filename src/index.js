import App from './App';
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.scss';

render(
  <Router>
    <App />
  </Router>,
document.getElementById("root"));