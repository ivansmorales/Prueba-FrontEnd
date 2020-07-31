import React, { useState } from "react";

import Header from "./Header";
import { Form, Button } from "react-bootstrap";
import n4 from "../../img/Group 4025.png";
import astrothinking from "../../img/Group 4038.png";
import Return from "./Return";

function Step4() {
  return (
    <div className="step-4">
      <div className="right-image">
        <img src={astrothinking} alt="An astronaut thinking" />
      </div>
      <Return />
      <Header title="Términos y" span="condiciones" img={n4} alt={"number-4"} />
      <p className="first-p">
        Por favor revisa nuestros términos y condiciones para este servicio:
      </p>
      <p>Consulta Términos y Condiciones</p>
      <Form>
        <Form.Check.Input type="checkbox" />
        <Form.Check.Label>{`Acepto los términos y condiciones.`}</Form.Check.Label>
      </Form>
      <div className="btn-wrapper">
        <Button variant="primary">Enviar</Button>
      </div>
    </div>
  );
}

export default Step4;
