import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Nama saya <span className="purple">Ubaidah Luthfiyah Zain</span>. 
            Biasa dipanggil <span className="purple">Ubed</span>.
            <br/>Saat ini saya sedang menempuh pendidikan di <span className="purple">Universitas Gunadarma </span>
            semester 5 jurusan <span className="purple">Informatika</span>.
            
            <br />
            
          <br /><h1 className="project-heading">
            <strong className="purple">Hobi: </strong>
          </h1>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Menonton Film
            </li>
            <li className="about-activity">
              <ImPointRight /> Membaca buku
            </li>
            <li className="about-activity">
              <ImPointRight /> Memotret
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
