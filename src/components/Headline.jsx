import React from "react";

import { Navbar, Row, Col } from "react-bootstrap";
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
          <div>
            <h2 className="phrase-1">Desarrolla todo</h2>
            <h1 className="phrase-2">
              <span className="orange">tu POTENCIAL</span>
            </h1>
            <h2 className="phrase-3">dentro del equipo</h2>
            <h1 className="phrase-4">
              <span className="orange">ATOMIC</span>LABS
            </h1>
          </div>
          <div className="button">
            <Button />
          </div>
        </Col>
      </Row>
      <div className="arrowDown">
        <img src={arrow} href="#about" className="arrow" alt="arrow-down" />
        <p>Quiero saber más</p>
      </div>
    </div>
  );
}

export default Headline;
