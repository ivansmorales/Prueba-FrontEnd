import React from "react";
import { Nav } from "react-bootstrap";

import "./Footer.css";
import linkedin from "../img/linkedin.png";
import twitter from "../img/twitter.png";

function Footer() {
  return (
    <div className="footer">
      <Nav>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            <p>&copy; AtomicLabs. Todos los derechos reservados</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/aviso">Aviso de privacidad</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.linkedin.com/company/atomic-mexico/">
            <img src={linkedin} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://twitter.com/AtomicMexico?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <img src={twitter} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Footer;
