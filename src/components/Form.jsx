import React from "react";

import "./Form.css";
import { Navbar } from "react-bootstrap";
import Logo from "./Logo";

function Form() {
  return (
    <div id="form">
      <Navbar>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Form;
