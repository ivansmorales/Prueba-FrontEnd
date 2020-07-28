import React from "react";

import { Navbar, Container, Row, Col } from "react-bootstrap";
import "./Headline.css";
import Logo from "./Logo";
import astronaut from "../img/Group 4032.png";
import arrow from "../img/Group 4013.png";
import Button from "./Button";

function Headline() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
      </Navbar>
      <Row>
        <Col lg={6} className="left">
          <img className="astronaut" src={astronaut} alt="astrounaut" />
        </Col>
        <Col lg={6} className="right">
          <h1>
            Desarrolla todo <span>tu POTENCIAL</span> dentro del equipo{" "}
            <span>ATOMIC</span>LABS
          </h1>
          <div className="button">
            <Button />
          </div>
        </Col>
      </Row>
      <div className="arrowDown">
        <img src={arrow} />
        <p>Quiero saber más</p>
      </div>
    </div>
  );
}

export default Headline;
