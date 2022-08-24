import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import logo from "../../Assets/Projects/estudylogo.png";
import ui from "../../Assets/Projects/ui.PNG";
import poster from "../../Assets/Projects/poster.jpg"
import bumper from "../../Assets/Projects/bumper.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Pernah mengerjakan sebuah <strong className="purple">Proyek </strong>
        </h1>
        <p style={{ color: "white" }}>
          Berikut adalah beberapa proyek yang pernah saya kerjakan
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Aplikasi Web Pembelajaran Dengan Konten Multimedia Interaktif"
              description="Ini adalah aplikasi yang saya buat menggunakan bahasa pemrograman Php dengan menggunakan framework laravel untuk proyek akhir (Skripsi). Aplikasi ini dibuat untuk media bantu pembelajaran mahasiswa. Dengan konten video animasi dan game pembelajaran."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui}
              isBlog={false}
              title="Desain UI/UX Ticketing System"
              description="Ini adalah salah satu tugas dalam pelaksanaan magang pada PT. Telkom Divisi TV Video, Membuat desain UI/UX ticketing system. Dalam pembuatan desain ini menggunakan tools figma dan berkolaborasi dengan kolega."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poster}
              isBlog={false}
              title="Poster UseeTV"
              description="Dalam rangka untuk mempromosikan aplikasi UseeTV pada social media, Maka saya membuat poster sebagai bahan promosi. Dalam pembuatan poster ini saya menggunakan Adobe Photoshop"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bumper}
              isBlog={false}
              title="Bumper UseeTV"
              description="Ini adalah tugas dalam pengembangan video panduan solusi UseeTV untuk pelanggan. Dalam pembuatan bumper ini saya menggunakan Adobe After Effect."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
