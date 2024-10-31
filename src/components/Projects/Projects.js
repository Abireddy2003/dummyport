import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dsp from "../../Assets/Projects/dsp.jpg";
import rasachat from "../../Assets/Projects/rasa-chat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsp}
              isBlog={false}
              title="Data Plane Development Kit"
              description="DPDK is a set of libraries and optimized network interface card (NIC)drivers for fast packet processing in a user space. DPDK providesa framework and common API for high-speed networking applica-tions. NVIDIA, as part of the DPDK open-source community, con-tributes not only to the development of high-performance NVIDIAdrivers but also by improving and expanding DPDK functionalitiesand use cases"
              ghLink="https://github.com/Abireddy2003/Mypop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rasachat}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Rasa is a conversational AI platform that provides open-source software, the Rasa Stack, for creating contextual AI assistants and chatbots."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
