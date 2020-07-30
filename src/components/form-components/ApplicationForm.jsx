import React, { useState } from "react";

import "./ApplicationForm.css";
import { Navbar, ProgressBar } from "react-bootstrap";
import Logo from "../Logo";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

import step2 from "../../img/Group 4020.png";
import step3 from "../../img/Group 4021.png";
import step4 from "../../img/Group 4022.png";

import gstep2 from "../../img/Group 4019.png";
import gstep3 from "../../img/Group 4017.png";
import gstep4 from "../../img/Group 4018.png";

import checkmark from "../../img/Group 4016.png";
import lock from "../../img/ic_lock2_24px.png";

function ApplicationForm() {
  return (
    <div id="form">
      <Navbar>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
      </Navbar>
      <div className="progress-wrapper">
        {/* <div className="number-progress s25">
          <h3>
            <img src={n1} alt="number-one" />
          </h3>
        </div>
        <div className="number-progress s50">
          <h3>
            <img src={gstep2} alt="number-two" />
          </h3>
        </div> */}
        <ProgressBar now={25} />
      </div>
      <Step1 />
    </div>
  );
}

export default ApplicationForm;
