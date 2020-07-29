import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="/form">
      <button class="firstBtn">¡Quiero ser parte!</button>
    </Link>
  );
}

export default Button;
