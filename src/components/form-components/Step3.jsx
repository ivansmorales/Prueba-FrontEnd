import React, { useState } from "react";

import "./Step3.css";
import { Form, Button } from "react-bootstrap";

import Header from "./Header";
import n3 from "../../img/Group 4024.png";
import edit from "../../img/Group 4026.png";
import astrofly from "../../img/Group 4034.png";
import Return from "./Return";

function Step3(props) {
  function showStep4(event) {
    props.toggler();
    event.preventDefault();
  }

  return (
    <div className="step-3">
      <div className="right-image">
        <img src={astrofly} alt="An astronaut flying" />
      </div>
      <Return />
      <Header title="Código de" span="verificacion" img={n3} alt={"number-3"} />
      <p className="first-p">Te enviamos un SMS al número: </p>
      <div className="your-number">
        <p className="first-p"> +52 55 1850 9196</p>
        <img src={edit} alt="edit-icon" />
      </div>
      <p className="second-p">Ingresa el código de verificación:</p>
      <Form>
        <Form.Group controlId="formBasicNumber">
          <Form.Label>Código de verificación</Form.Label>
          <Form.Control required type="number" />
        </Form.Group>
      </Form>
      <p>
        ¿No recibiste el código? <b>Reenviar código</b>
      </p>
      <div className="btn-wrapper">
        <Button variant="primary" onClick={showStep4}>
          Validar código
        </Button>
      </div>
    </div>
  );
}

export default Step3;
