import React, { useState } from "react";

import Header from "./Header";
import n4 from "../../img/Group 4025.png";
import astrothinking from "../../img/Group 4038.png";

function Step4() {
  return (
    <div className="step-4">
      <div className="right-image">
        <img src={astrothinking} alt="An astronaut thinking" />
      </div>
      <Header title="Términos y" span="condiciones" img={n4} alt={"number-4"} />
      <p>
        Por favor revisa nuestros términos y condiciones para este servicio:
      </p>
      <p>Consulta Términos y Condiciones</p>
      <input type="checkmark" /> <p>Acepto los términos y condiciones</p>
      <button>Enviar</button>
    </div>
  );
}

export default Step4;
