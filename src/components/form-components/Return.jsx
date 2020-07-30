import React from "react";

import "./Return.css";

import lt from "../../img/lt.png";

function Return() {
  return (
    <p className="return-p">
      <img src={lt} alt="go-back" />
      &nbsp;&nbsp;Regresar
    </p>
  );
}

export default Return;
