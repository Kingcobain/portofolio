import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Nama Lengkapku <span className="purple">Rafi Uletta Giovanni </span>
            . Aku lahir dari <span className="purple"> Brebes, Jawa Tengah.</span>
            <br />Aku lulusan dari jurusan D4 Teknologi Rekayasa Multimedia Telkom University Bandung.
            <br />
            <br />
            Selain ketertarikanku pada dunia koding, aktivitas lain ku adalah
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Main Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Makan
            </li>
            <li className="about-activity">
              <ImPointRight /> Chill
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Tidak ada yang tidak mungkin, semua pasti dapat dipelajari"{" "}
          </p>
          <footer className="blockquote-footer">Unknown</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
