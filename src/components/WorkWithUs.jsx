import React from "react";

import "./WorkWithUs.css";
import people from "../img/Group 4040.png";
import arrow from "../img/arrow1.png";
import Button from "./Button";
import { Col, Container, Row } from "react-bootstrap";

function WorkWithUs() {
  return (
    <div id="workingWithUs">
      <div className="info">
        <h1 className="info-h1">¡Te encantará</h1>
        <h1 className="info-h1">
          <span className="orange">trabajar con nosotros!</span>
        </h1>
      </div>
      <div>
        <img src={people} alt="people" className="peopleImg" />
        <Container>
          <Row>
            <Col>
              <p>Contratación remota</p>
            </Col>
            <Col>
              <img src={arrow} alt="arrow" className="arrow-right" />
            </Col>
            <Col md="auto">
              <p>Entrevista con el área de RH</p>
            </Col>
            <Col>
              <img src={arrow} alt="arrow" className="arrow-right" />
            </Col>
            <Col>
              <p>Prueba práctica</p>
            </Col>
            <Col>
              <img src={arrow} alt="arrow" className="arrow-right" />
            </Col>
            <Col>
              <p>Entrevista técnica</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="genericBtn extra-space">
        <Button />
      </div>
    </div>
  );
}

export default WorkWithUs;
