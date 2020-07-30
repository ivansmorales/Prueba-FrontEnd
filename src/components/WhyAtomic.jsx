import React from "react";

import "./WhyAtomic.css";
import { Col, Container, Row, Table } from "react-bootstrap";
import Button from "./Button";
import astropc from "../img/Group 4041 1.png";
import engineer from "../img/Group 4042.png";
import astrolympic from "../img/Group 4043.png";
import checkmark from "../img/ic_check_tiny.png";

function WhyAtomic() {
  return (
    <div id="whyAtomic">
      <div className="info">
        <h1 className="info-h1">
          ¿por qué
          <span className="orange"> atomic?</span>
        </h1>
      </div>
      <div className="pros">
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
      <div className="characteristics">
        <Container>
          <Table>
            <thead>
              <tr>
                <th className="left">Características</th>
                <th>Otros</th>
                <th className="bigger bluec">Atomic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="left first-td">
                  Equipo inclusivo, honesto y auténtico
                </td>
                <td>
                  <img src={checkmark} alt="checkmark" />
                </td>
                <td className="bluec">
                  <img src={checkmark} alt="checkmark" />
                </td>
              </tr>
              <tr>
                <td className="left">Puntualidad es nuestro segundo nombre</td>
                <td>
                  <img src={checkmark} alt="checkmark" />
                </td>
                <td className="bluec">
                  <img src={checkmark} alt="checkmark" />
                </td>
              </tr>
              <tr>
                <td className="left">
                  Siempre innovamos en nuestros productos
                </td>
                <td>
                  <img src={checkmark} alt="checkmark" />
                </td>
                <td className="bluec">
                  <img src={checkmark} alt="checkmark" />
                </td>
              </tr>
              <tr>
                <td className="left">
                  Te ayudamos a crecer e implementar nuevos conocimientos
                </td>
                <td></td>
                <td className="bluec">
                  <img src={checkmark} alt="checkmark" />
                </td>
              </tr>
              <tr>
                <td className="left">Nos preocupamos por tu bienestar</td>
                <td></td>
                <td className="bluec">
                  <img src={checkmark} alt="checkmark" />
                </td>
              </tr>
              <tr>
                <td className="left">El respeto es una parte fundamental</td>
                <td></td>
                <td className="bluec">
                  <img src={checkmark} alt="checkmark" />
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <div className="genericBtn">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default WhyAtomic;
