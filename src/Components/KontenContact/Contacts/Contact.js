import React from 'react';
import "./Contact.css";
import { Container, Row } from 'react-bootstrap';
import { Map as IconMap, Mailbox, Phone } from 'react-bootstrap-icons';


function Contact() {
  return (
    <section id="contact" className="contact">
      <Container>

      <Row>

          <div className="col-lg-6">
            <div className="info-box mb-4">
              {/* <i className="bx bx-map"></i> */}
              <i><IconMap/></i>
              <h3>Alamat Kami</h3>
              <p>Jl. Pangeran Antasari No.5 RT.1/RW.9, Cipete Utara Kec.Kebayoran Baru Jakarta, 12150</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              {/* <i className="bx bx-envelope"></i> */}
              <i><Mailbox/></i>
              <h3>Email Us</h3>
              <p>yolanindahnusantara@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i><Phone/></i>
              <h3>Call Us</h3>
              <p>(021) 75909748</p>
              {/* <a href='https://wa.me/628170123021/?text=Halo+Admin%2C+saya+baru+saja+mengunjungi+website+Yolan+Indah+Nusantara%2C+Saya+ingin+berkonsultasi+tentang+.............+%28silahkan+isi+informasi+yang+anda+ingin+tanyakan+kepada+kami%29'>
                (021) 7590948
              </a> */}
              <a href='https://wa.me/628170123021/?text=Halo+Admin%2C+saya+baru+saja+mengunjungi+website+Yolan+Indah+Nusantara%2C+Saya+ingin+berkonsultasi+tentang+.............+%28silahkan+isi+informasi+yang+anda+ingin+tanyakan+kepada+kami%29'>
                (+62) 8170123021
              </a>
              {/* <p>(+62) 8170123021</p> */}
            </div>
          </div>
          
      </Row>

      <Row>

          <div className="col-lg-6 ">
            {/* <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe> */}
            {/* <iframe
              className="mb-4 mb-lg-0"
              // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhxiK6tu8N-RIk7foD6KqDs_GsNnHL77U"
              title="Google Maps"
              style={{ border: "none", width: "100%", height: "384px" }}
              allowFullScreen
            ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.937871266037!2d106.80393218497176!3d-6.271900645180362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f18e56f87eeb%3A0x2b5b741e0b0947e!2sYolan%20Indah!5e0!3m2!1sen!2sid!4v1698550751677!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: "none", width: "100%", height: "384px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title='maps yolan indah'
          ></iframe>

          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Nama Anda" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Email Anda" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Kirim Pesan</button></div>
            </form>
          </div>

      </Row>

      </Container>
    </section>
  );
}

export default Contact;
