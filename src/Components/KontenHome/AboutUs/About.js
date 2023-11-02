import React from 'react';
import "./About.css";


// import image
import AboutImg from "../../../assets/img/yin.jpeg";
import { Container } from 'react-bootstrap';

//favicon
import { CheckCircle } from 'react-bootstrap-icons';

function About() {
  return (
    <section id="about" className="about">
      <Container>
        <div className="row">
            <div className="col-lg-6">
              {/* <AboutImg className="img-fluid" alt="AboutImg"/> */}
              <img src={AboutImg} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <strong> 
              <p className="fst-italic bold">
                  PT Yolan Indah Nusantara
              </p>
              </strong>
              <p>
                Awal kali berdiri tahun 2008 bermula dari bengkel las yang menyediakan jasa pengelesan. Setelah tahun berjalan kami bertekad untuk melebarkan sayap menjadi sebuah perusahaan penyedia jasa renovasi rumah.
              </p>

              <ul>
                <li><i><CheckCircle/></i>Visi</li>
                <p>
                  Menjadi partner bisnis yang handal, terpercaya dan berkualitas dalam memenuhi kebutuhan konsumen
                </p>
                <li><i><CheckCircle/></i>Misi</li>
                <p>
                Berkomitmen untuk terus menjaga kualitas dan kepuasan konsumen.
                Menggunakan material terbaik dalam menghasilkan setiap produk
                Memberikan solusi terbaik setiap permasalahan konsumen dalam menciptakan kualitas kerja
                </p>
              </ul>
            </div>
          </div>
      </Container>
      {/* <div className="container">



      </div> */}
    </section>
  );
}

export default About;
