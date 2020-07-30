import React from "react";

import "./About.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import worlds from "../img/Group 4035.png";
import cloud from "../img/Group 4036.png";
import moon from "../img/Group 4037.png";

function About() {
  return (
    <div id="about">
      <div className="info">
        <h1 className="info-h1">Somos el brazo derecho</h1>
        <h1 className="info-h1">
          <span className="orange">de la tecnología</span>
        </h1>
      </div>
      <div>
        <Container id="wrapper">
          <Row>
            <Col lg={4}>
              <Card className="leftCard">
                <Card.Img variant="top" src={worlds} />
                <Card.Body>
                  <Card.Subtitle>— - —</Card.Subtitle>
                  <Card.Title>EXPLORA</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>
                        Innovación y{" "}
                        <span className="bold">creación tecnológica</span>
                      </li>
                      <li>
                        <span className="bold">UI/UX</span>
                      </li>
                      <li>
                        <span className="bold">Innovación</span>
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="middleCard">
                <Card.Img variant="top" src={cloud} />
                <Card.Body>
                  <Card.Subtitle>— - —</Card.Subtitle>
                  <Card.Title>IMAGINA</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>
                        <span className="bold">Estrategia </span>Digital
                      </li>
                      <li>
                        Big Data & <span className="bold">Analysis</span>
                      </li>
                      <li>
                        <span className="bold">Consultoría </span>Tecnológica
                      </li>
                      <li>
                        <span className="bold">Reducción</span> de costos TI
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="rightCard">
                <Card.Img variant="top" src={moon} />
                <Card.Body>
                  <Card.Subtitle>— - —</Card.Subtitle>
                  <Card.Title>CONQUISTA</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>
                        Desarrollo tecnológico{" "}
                        <span className="bold">a la medida</span>
                      </li>
                      <li>
                        <span className="bold">Ciberseguridad</span>
                      </li>
                      <li>
                        <span className="bold">Servicios de la Nube</span>
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
