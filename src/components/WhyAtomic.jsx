import React from "react";

import "./WhyAtomic.css";
import { Col, Container, Row } from "react-bootstrap";
import astropc from "../img/Group 4041 1.png";
import engineer from "../img/Group 4042.png";
import astrolympic from "../img/Group 4043.png";

function WhyAtomic() {
  return (
    <div id="whyAtomic">
      <div className="info">
        <h1 className="info-h1">
          ¿por qué
          <span className="orange"> atomic?</span>
        </h1>
      </div>
      <div class="pros">
        <Container>
          <Row>
            <Col>
              <img src={astropc} alt="Astronaut designing" />
            </Col>
            <Col>
              <img src={engineer} alt="Engineer" />
            </Col>
            <Col>
              <img src={astrolympic} alt="Astronaut olympic" />
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <li>Usamos las tecnologías más modernas.</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>¡Trabajamos en equipo rumbo al éxito!</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>Realizamos actividades para tu bienestar.</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <li>Innovamos y creamos proyectos retadores.</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>No tenemos código de vestimenta</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>¡Tenemos un parque frente a la oficina!</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default WhyAtomic;
