import React from 'react';
import "./Counts.css";
import { Container } from 'react-bootstrap';


function Counts() {
  return (
    <section id="counts" className="counts">
      <Container>

      <div className="row no-gutters">

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
            <i className="bi bi-emoji-smile"></i>
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Happy Clients</strong> consequuntur quae qui deca rode</p>
            <a href="#/">Find out more &raquo;</a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
            <i className="bi bi-journal-richtext"></i>
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Projects</strong> adipisci atque cum quia aut numquam delectus</p>
            <a href="#/">Find out more &raquo;</a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
            <i className="bi bi-headset"></i>
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Hours Of Support</strong> aut commodi quaerat. Aliquam ratione</p>
            <a href="#/">Find out more &raquo;</a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
            <i className="bi bi-people"></i>
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
            <p><strong>Hard Workers</strong> rerum asperiores dolor molestiae doloribu</p>
            <a href="#/">Find out more &raquo;</a>
          </div>
        </div>

        </div>

      </Container>
    </section>
  );
}

export default Counts;
