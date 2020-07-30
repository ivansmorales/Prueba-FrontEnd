import React, { useState } from "react";

import Header from "./Header";
import n3 from "../../img/Group 4024.png";
import edit from "../../img/Group 4026.png";
import astrofly from "../../img/Group 4034.png";

function Step3() {
  return (
    <div className="step-3">
      <div className="right-image">
        <img src={astrofly} alt="An astronaut flying" />
      </div>
      <Header title="Código de" span="verificacion" img={n3} alt={"number-3"} />
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
  );
}

export default Step3;
