import React from "react";

import "./ApplicationForm.css";
import { Navbar, ProgressBar, Form, Button } from "react-bootstrap";
import Logo from "../Logo";
import Header from "./Header";

import n1 from "../../img/Group 4014.png";
import n2 from "../../img/Group 4023.png";
import n3 from "../../img/Group 4024.png";
import n4 from "../../img/Group 4025.png";

import step2 from "../../img/Group 4020.png";
import step3 from "../../img/Group 4021.png";
import step4 from "../../img/Group 4022.png";

import gstep2 from "../../img/Group 4019.png";
import gstep3 from "../../img/Group 4017.png";
import gstep4 from "../../img/Group 4018.png";

import checkmark from "../../img/Group 4016.png";
import edit from "../../img/Group 4026.png";

import astrosit from "../../img/Group 4033.png";

function ApplicationForm() {
  return (
    <div id="form">
      <Navbar>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
      </Navbar>
      <div className="progress-wrapper">
        <div className="number-progress s25">
          {/* <img src={n1} alt="number-one" /> */}
          <h3>1</h3>
        </div>
        <ProgressBar now={25} />
      </div>
      <div className="step-1">
        <div className="right-image">
          <img src={astrosit} alt="An astronaut on the floor" />
        </div>
        <Header title="Te queremos" span="conocer" img={n1} alt={"number-1"} />
        <p className="first-p">
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </p>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Nombre (s)</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formBasicSubname">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <div class="btn-wrapper">
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
      <div className="step-2">
        <Header title="Valida tu" span="celular" img={n2} alt={"number-2"} />
        <p>Necesitamos validar tu número para continuar</p>
        <p>Ingresa tu número a 10 dígitos y te enviaremos un código SMS.</p>
        <p>Número de celular</p>
        <input type="number" />
        <button>Continuar</button>
      </div>
      <div className="sending-status"></div>
      <div className="step-3">
        <Header
          title="Código de"
          span="verificacion"
          img={n3}
          alt={"number-3"}
        />
        <p>Te enviamos un SMS al número: </p>
        <p> +52 55 1850 9196</p>
        <img src={edit} />
        <p>Ingresa el código de verificación</p>
        <p>Código de verificación</p>
        <input type="number" />
        <p>
          ¿No recibiste el código? <span>Reenviar código</span>
        </p>
      </div>
      <div className="status-validated"></div>
      <div className="step-4">
        <Header
          title="Términos y"
          span="condiciones"
          img={n4}
          alt={"number-4"}
        />
        <p>
          Por favor revisa nuestros términos y condiciones para este servicio:
        </p>
        <p>Consulta Términos y Condiciones</p>
        <input type="checkmark" /> <p>Acepto los términos y condiciones</p>
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default ApplicationForm;
