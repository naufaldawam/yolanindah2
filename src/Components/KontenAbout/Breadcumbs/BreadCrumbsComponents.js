import React from 'react';
import "./BreadCrumbsComponents.css";
import { Container } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';

function BreadCrumbsComponents() {
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <Container>
        <ol>
          <li><a href="/">Home</a></li>
          <li>About Us</li>
        </ol>
        <h2>Tentang Kami</h2>
      </Container>
    </section>
  );
}

export default BreadCrumbsComponents;
