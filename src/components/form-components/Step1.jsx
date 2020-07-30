import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import Header from "./Header";

import n1 from "../../img/Group 4014.png";
import astrosit from "../../img/Group 4033.png";

function Step1() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  function step2() {
    console.log("click");
  }

  return (
    <div className="step-1">
      <div className="right-image">
        <img src={astrosit} alt="An astronaut on the floor" />
      </div>
      <Header title="Te queremos" span="conocer" img={n1} alt={"number-1"} />
      <p className="only-p">
        Queremos saber que eres tú, por favor ingresa los siguientes datos:
      </p>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre (s)</Form.Label>
          <Form.Control required type="text" />
          <Form.Control.Feedback type="invalid">
            El nombre deberá tener mínimo 5 caracteres.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicSubname">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <div class="btn-wrapper">
          <Button variant="primary" onClick={step2}>
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Step1;
