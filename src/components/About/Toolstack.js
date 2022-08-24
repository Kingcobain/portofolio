import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAdobeaftereffects,
  SiVisualstudiocode,
  SiSublimetext,
} from "react-icons/si";
import {
  DiBootstrap,
  DiPhotoshop,
  DiGithubBadge,
  DiStackoverflow,
} from "react-icons/di"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiStackoverflow />
      </Col>
    </Row>
  );
}

export default Toolstack;
