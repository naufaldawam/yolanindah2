import '../Footer/Footer.css';
import React from 'react';
import { Form } from 'react-bootstrap';

// import favicon
import { Facebook, Instagram} from 'react-bootstrap-icons';

const Footer = () => (
  <footer id="footer">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>Dapatkan Penawaran ?</h4>
            <p>Silahkan ketik email anda pada kolom yang tersedia , tim marketing kami akan menghubungi anda</p>
          </div>
          <div className="col-lg-6">
            <Form>
              <input type="email" name="email" placeholder='Masukkan Email Anda' />
              <input type="submit" value="Kirim Email" />
            </Form>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-top">
      <div className="container">
        <div className="row">

          {/* <div className="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx"><ChevronRight/></i> <a href="#/">Home</a></li>
            <li><i className="bx"><ChevronRight/></i> <a href="#/">About us</a></li>
            <li><i className="bx"><ChevronRight/></i> <a href="#/">Services</a></li>
            <li><i className="bx"><ChevronRight/></i> <a href="#/">Terms of service</a></li>
            <li><i className="bx"><ChevronRight/></i> <a href="#/">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx"><ChevronRight/></i> <a href="#/">Web Design</a></li>
            <li><i className="bx"><ChevronRight/></i> <a href="#/">Web Development</a></li>
            <li><i className="bx"><ChevronRight/></i> <a href="#/">Product Management</a></li>
            <li><i className="bx"><ChevronRight/></i> <a href="#/">Marketing</a></li>
            <li><i className="bx"><ChevronRight/></i> <a href="#/">Graphic Design</a></li>
          </ul>
        </div> */}

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              Jl. Pangeran Antasari No.5 <br />
              RT.1/RW.9, Cipete Utara <br />
              Kec.Kebayoran Baru <br />
              Jakarta, 12150 <br /><br />
              <strong>Phone:</strong> (021) 7590948<br />
              <strong>Phone:</strong> (+62) 8170123021<br />
              <strong>Email:</strong> yolanindahnusantara@gmail.com<br />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-info">
            <h3>About</h3>
            <p>Terus dapatkan informasi seputar kita pada link dibawah ini</p>
            <div className="social-links mt-3">
              {/* <a href="#/" className="twitter"><i className="bx"><Twitter/></i></a> */}
              <a href="https://www.facebook.com/yolan.indah.7/" className="facebook" target='_blank' rel="noreferrer"><i className="bx"><Facebook /></i></a>
              <a href="https://instagram.com/muchlis948?igshid=NzZlODBkYWE4Ng== " className="instagram" target="_blank" rel="noreferrer"><i className="bx"><Instagram /></i></a>
              {/* <a href="#/" className="google-plus"><i className="bx"><Skype /></i></a> */}
              {/* <a href="#/" className="linkedin"><i className="bx"><Linkedin /></i></a> */}
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright  <strong><span>PT. Yolan Indah Nusantara</span></strong>, All Rights Reserved
      </div>
      <div className="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/eterna-free-multipurpose-bootstrap-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
      </div>
    </div>
  </footer>
);

export default Footer;

