import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import Header from "./Header";

import n2 from "../../img/Group 4023.png";
import astrofly from "../../img/Group 4034.png";

function Step2() {
  return (
    <div className="step-2">
      <div className="right-image">
        <img src={astrofly} alt="An astronaut flying" />
      </div>
      <Header title="Valida tu" span="celular" img={n2} alt={"number-2"} />
      <p>Necesitamos validar tu número para continuar</p>
      <p>Ingresa tu número a 10 dígitos y te enviaremos un código SMS.</p>
      <p>Número de celular</p>
      <input type="number" />
      <button>Continuar</button>
    </div>
  );
}

export default Step2;
