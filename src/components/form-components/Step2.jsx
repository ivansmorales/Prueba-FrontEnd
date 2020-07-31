import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import Header from "./Header";
import Return from "./Return";

import n2 from "../../img/Group 4023.png";
import astrofly from "../../img/Group 4034.png";

function Step2(props) {
  function showStep3(event) {
    props.toggler();
    event.preventDefault();
  }

  return (
    <div className="step-2">
      <div className="right-image">
        <img src={astrofly} alt="An astronaut flying" />
      </div>
      <Return />
      <Header title="Valida tu" span="celular" img={n2} alt={"number-2"} />
      <p className="first-p">Necesitamos validar tu número para continuar</p>
      <p className="second-p">
        Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
      </p>
      <Form>
        <Form.Group controlId="formBasicNumber">
          <Form.Label>Número de celular</Form.Label>
          <Form.Control required type="number" />
        </Form.Group>
        <div className="btn-wrapper">
          <Button variant="primary" onClick={showStep3}>
            Continuar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Step2;
