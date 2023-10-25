import React from 'react';
import "./Client.css";
import { Container } from 'react-bootstrap';

import Client1 from "../../../assets/img/clients/client-1.png"
import Client2 from "../../../assets/img/clients/client-2.png"
import Client3 from "../../../assets/img/clients/client-3.png"
import Client4 from "../../../assets/img/clients/client-4.png"
import Client5 from "../../../assets/img/clients/client-5.png"
import Client6 from "../../../assets/img/clients/client-6.png"
import Client7 from "../../../assets/img/clients/client-7.png"
import Client8 from "../../../assets/img/clients/client-8.png"

function Client() {
  return (
    <section id="clients" class="clients">
      <Container>
        <div class="section-title">
          <h2>Clients</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="clients-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide"><img src={Client1} class="img-fluid" alt="imgfluid"/></div>
            <div class="swiper-slide"><img src={Client2} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client3} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client4} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client5} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client6} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client7} class="img-fluid" alt=""/></div>
            <div class="swiper-slide"><img src={Client8} class="img-fluid" alt=""/></div>
          <div class="swiper-pagination"></div>\
          </div>
        </div>
      </Container>

    </section>
  );
}

export default Client;
