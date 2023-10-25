import React from 'react';
import "./BreadCrumbsComponents.css";
// import { Container } from 'react-bootstrap';

function BreadCrumbsComponents() {
  return (
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <ol>
          <li><a href="/">Home</a></li>
          <li>About Us</li>
        </ol>
        <h2>Anda Sudah Berpindah Kehalaman AboutUs</h2>

      </div>
    </section>
  );
}

export default BreadCrumbsComponents;
