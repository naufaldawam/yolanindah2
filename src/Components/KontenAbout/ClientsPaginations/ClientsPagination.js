import React from 'react';
import "./ClientsPagination.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

import Client1 from "../../../assets/img/clients/client-1.png"
import Client2 from "../../../assets/img/clients/client-2.png"
import Client3 from "../../../assets/img/clients/client-3.png"
import Client4 from "../../../assets/img/clients/client-4.png"
import Client5 from "../../../assets/img/clients/client-5.png"
import Client6 from "../../../assets/img/clients/client-6.png"
import Client7 from "../../../assets/img/clients/client-7.png"
import Client8 from "../../../assets/img/clients/client-8.png"

import { Pagination } from 'swiper/modules';


function ClientsPagination() {
  return (
    <section id="clients" className="clients">
      <Container>
        <div className="section-title">
          <h2>Clients pagination</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide><img src={Client1} alt='client 1' className='img-fluid'/></SwiperSlide>
          <SwiperSlide><img src={Client2} alt='client 2' className='img-fluid'/></SwiperSlide>
          <SwiperSlide><img src={Client3} alt='client 3' className='img-fluid'/></SwiperSlide>
          <SwiperSlide><img src={Client4} alt='client 4' className='img-fluid'/></SwiperSlide>
          <SwiperSlide><img src={Client5} alt='client 5' className='img-fluid'/></SwiperSlide>
          <SwiperSlide><img src={Client6} alt='client 6' className='img-fluid'/></SwiperSlide>
          <SwiperSlide><img src={Client7} alt='client 7' className='img-fluid'/></SwiperSlide>
          <SwiperSlide><img src={Client8} alt='client 8' className='img-fluid'/></SwiperSlide>

        </Swiper>
      </Container>
    </section>
  );
}

export default ClientsPagination;
