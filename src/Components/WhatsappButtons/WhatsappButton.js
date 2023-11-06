import React from 'react';
import './WhatsappButton.css';


import { Whatsapp } from 'react-bootstrap-icons';

function WhatsappButton () {
    return(
    <a href="https://wa.me/628170123021/?text=Halo+Admin%2C+saya+baru+saja+mengunjungi+website+Yolan+Indah+Nusantara%2C+Saya+ingin+berkonsultasi+tentang+.............+%28silahkan+isi+informasi+yang+anda+ingin+tanyakan+kepada+kami%29" className="whatsapp-link" target='_blank' rel='noreferrer'>
      <Whatsapp className="whatsapp-icon" />
    </a>
    )
};

export default WhatsappButton;