import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CategoryEditForm from "./CategoryEdit";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid">
      <CategoryEditForm />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
