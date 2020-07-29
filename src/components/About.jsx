import React from "react";

import "./About.css";
import { CardGroup, Card } from "react-bootstrap";
import worlds from "../img/Group 4035.png";
import cloud from "../img/Group 4036.png";
import moon from "../img/Group 4037.png";

function About() {
  return (
    <div>
      <div className="info">
        <h1 className="info-h1">Somos el brazo derecho</h1>
        <h1 className="info-h1">
          <span>de la tecnología</span>
        </h1>
      </div>
      <div className="cards">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={worlds} />
            <Card.Body>
              <Card.Title>EXPLORA</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={cloud} />
            <Card.Body>
              <Card.Title>IMAGINA</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={moon} />
            <Card.Body>
              <Card.Title>CONQUISTA</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default About;
