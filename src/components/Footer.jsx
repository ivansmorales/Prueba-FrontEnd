import React from "react";
import { Nav } from "react-bootstrap";

import "./Footer.css";
import linkedin from "../img/linkedin.png";
import twitter from "../img/twitter.png";

function Footer() {
  return (
    <div className="footer">
      <Nav>
        <Nav.Item className="copyright">
          <Nav.Link eventKey="disabled" disabled>
            <p>&copy; 2020 AtomicLabs. Todos los derechos reservados.</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="aviso">
          <Nav.Link href="#">Aviso de privacidad</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="logo ln"
            href="https://www.linkedin.com/company/atomic-mexico/"
          >
            <img src={linkedin} alt="linkedin logo" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="logo tw"
            href="https://twitter.com/AtomicMexico?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            <img src={twitter} alt="twitter logo" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Footer;
