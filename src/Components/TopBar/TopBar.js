// import './TopBar.css';
// import React from 'react';
// import { Twitter, Facebook, Instagram, Linkedin, Envelope } from 'react-bootstrap-icons';


// function TopBars() {
//   return (
//     <>
//       <section id="topbar" classname="d-flex align-items-center">
//         <div className="container d-flex justify-content-center justify-content-md-between">
//           <div className="contact-info d-flex align-items-center">
//             {/* <i classname="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i> */}
//             <a cla="d-flex align-items-center" href="mailto:contact@example.com"><Envelope />contact@example.com</a>
//             <i classname="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
//           </div>
//           <div classname="social-links d-none d-md-flex align-items-center">
//             <a href="#/" classname="twitter"><Twitter/></a>
//             <a href="#/" classname="facebook"><Facebook/></a>
//             <a href="#/" classname="instagram"><Instagram/></a>
//             <a href="#/" classname="linkedin"><Linkedin/></a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default TopBars;


import './TopBar.css';
import React from 'react';
import { Envelope, Twitter, Facebook, Instagram, Linkedin, Phone } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

function TopBars() {
  return (
    <section id="topbar" className="d-flex align-items-center">
      <Container className="d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="d-flex align-items-center">
            <Envelope/>
            <a href="mailto:contact@example.com">marketing@yolanindah.com</a>
          </i>
          <i className="d-flex align-items-center ms-4">
            <Phone/>
            <span>(021) 7590948</span>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="#/" className="twitter">
            <Twitter/>
          </a>
          <a href="#/" className="facebook">
            <Facebook/>
          </a>
          <a href="#/" className="instagram">
            <Instagram/>
          </a>
          <a href="#/" className="linkedin">
            <Linkedin/>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default TopBars;

