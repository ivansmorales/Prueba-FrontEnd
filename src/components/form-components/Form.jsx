import React from "react";

import "./Form.css";
import { Navbar } from "react-bootstrap";
import Logo from "../Logo";
import Header from "./Header";

import n1 from "../../img/Group 4014.png";
import n2 from "../../img/Group 4023.png";
import n3 from "../../img/Group 4024.png";
import n4 from "../../img/Group 4025.png";

function Form() {
  return (
    <div id="form">
      <Navbar>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
      </Navbar>
      <Header title="Te queremos" span="conocer" img={n1} alt={"number-1"} />
      {/* <Header title="Valida tu" span="celular" img={n2} alt={"number-2"} />
      <Header title="Código de" span="verificacion" img={n3} alt={"number-3"} />
      <Header title="Términos y" span="condiciones" img={n4} alt={"number-4"} /> */}
      <p>Queremos saber que eres tú, por favor ingresa los siguientes datos:</p>
      <form>
        <p>Nombre (s)</p>
        <input type="text" />
        <p>Apellidos (s)</p>
        <input type="text" />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
