import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BIARKAN SAYA <span className="purple"> MEMPERKENALKAN </span> DIRI
            </h1>
            <p className="home-about-body">
            Saya mahasiswa yang baru menyelesaikan studi pada jurusan D4 Teknologi Rekayasa Multimedia di Telkom Univeristy.
              <br />
              <br />Saya sedang menunggu wisuda yang akan diselenggarakan pada bulan
              <i>
                <b className="purple"> November 2022 </b>
              </i>
              <br />
              <br />
              Ketika diakhir masa perkuliahan, saya membuat Proyek Akhir mengenai &nbsp;
              <i>
                <b className="purple">Aplikasi Website Pembelajaran Dengan Konten Multimedia Interaktif</b> dan
                ini membuat saya tertarik dalam bidang{" "}
                <b className="purple">
                  Web Developer
                </b>
              </i>
              <br />
              <br />
              Saya juga menerapkan Passion untuk terus belajar dengan
              Bahasa Pemrograman <b className="purple">HTML, PHP, CSS & JS</b> dengan menggunakan
              <i>
                <b className="purple">
                  {" "}
                  Library and Framework
                </b>
              </i>
              &nbsp; seperti
              <i>
                <b className="purple"> Laravel and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>KEPOIN DISOKIN!</h1>
            <p>
              Jgn ragu-ragu untuk <span className="purple">follow </span>disini
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kingcobain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rafi-uletta-giovanni-6b0426249"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rafiuletta/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
