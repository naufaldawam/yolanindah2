import React from 'react';
import "./Service.css";
import { Container } from 'react-bootstrap';
import { ColumnsGap, Hammer, UmbrellaFill, BuildingGear, HouseDoor, Tools} from 'react-bootstrap-icons';

// import { Dribbble, FileEarmarkText, Speedometer2, GlobeAmericas, FileEarmarkSlides, Archive} from 'react-bootstrap-icons';
function Service() {
  return (
  <section id="services" className="services">
    <Container>
      <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i className="bx"><HouseDoor/></i></div>
              <h4><a href="/#">Jasa Renovasi Rumah</a></h4>
              <p>
                Tim ahli kami akan membantu Anda merancang dan melaksanakan proyek renovasi rumah sesuai dengan kebutuhan dan anggaran Anda.
              </p>
              <a className="btn-more" href='/contact'>Hubungi Kami</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="bx"><Tools/></i></div>
              <h4><a href="/#">Jasa Pengelasan</a></h4>
              <p>
                Kami ahli dalam penggabungan dan perbaikan material logam. Solusi pengelasan berkualitas untuk berbagai proyek.
              </p>
              <a className="btn-more" href='/contact'>hubungi kami</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx"><ColumnsGap/></i></div>
              <h4><a href="/#">Jasa Pembuatan Kitchen Set</a></h4>
              <p>
                Desain dan pembuatan furniture kustom berkualitas sesuai kebutuhan Anda.
              </p>
              <a className="btn-more" href='/contact'>hubungi kami</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx"><Hammer/></i></div>
              <h4><a href="/#">Jasa Pembuatan Pagar dan Tangga</a></h4>
              <p>
                Desain dan konstruksi pagar dan tangga sesuai preferensi Anda.
              </p>
              <a className="btn-more" href='/contact'>hubungi kami</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx"><UmbrellaFill/></i></div>
              <h4><a href="/#">Jasa Pembuatan Kanopi</a></h4>
              <p>
                Desain dan instalasi kanopi untuk melindungi dari cuaca dan memberikan area teduh.
              </p>
              <a className="btn-more" href='/contact'>hubungi kami</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-arch"><BuildingGear/></i></div>
              <h4><a href="/#">Jasa Dekorasi Rumah dan Gedung</a></h4>
              <p>
                Transformasi interior dan eksterior dengan desain kreatif untuk menciptakan suasana yang memikat.
              </p>
              <a className="btn-more" href='/contact'>hubungi kami</a>
            </div>
          </div>

      </div>
    </Container>


  </section>
  );
}

export default Service;
