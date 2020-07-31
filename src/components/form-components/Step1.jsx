import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import Header from "./Header";

import n1 from "../../img/Group 4014.png";
import astrosit from "../../img/Group 4033.png";

function Step1(props) {
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({
    name: "Car",
    subname: "Domínguez Hernández",
    phone: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  }

  function submitUser(event) {
    if (user.name.length < 4) {
      event.preventDefault();
      alert("El nombre deberá tener más de 3 caracteres");
      event.stopPropagation();
    } else {
      setValidated(true);
      props.toggler();
      event.preventDefault();
    }
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

      <Form noValidate validated={validated} onSubmit={submitUser}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre (s)</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid" id="control-f">
            El nombre deberá tener mínimo 5 caracteres.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicSubname">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            name="subname"
            onChange={handleChange}
            value={user.subname}
          />
        </Form.Group>
        <div className="btn-wrapper">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Step1;
