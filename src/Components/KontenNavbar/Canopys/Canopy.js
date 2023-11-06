import React from 'react';
import './Canopy.css';

import CanopyImg from "../../../assets/img/canopy.png"



function Canopy () {

    return(
      <div className="canopys-railing-container">
        <h1><strong>Jasa Pembuatan Kanopi</strong></h1>
        <div className="canopys-main-photo">
          {/* <img
            src="https://pakama.co.id/public/uploads/pakama-jasa-pemasangan-granit-lantai-dan-meja-dapur.jpg"
            alt="jasa pemasangan granit lantai dan meja dapur"
          /> */}
          <img src={CanopyImg} alt='kanopi'/>
        </div>

        <div className="single-service-text recent-single-text pt_30">
          <p className="canopysp">
            Kanopi adalah elemen penting dalam desain rumah, tidak hanya untuk melindungi teras dan garasi Anda dari cuaca, tetapi juga untuk menciptakan kesan visual yang menarik dan sesuai dengan gaya rumah Anda. kanopi biasanya dapat digunakan untuk berbagai aplikasi, termasuk kanopi garasi, kanopi teras, kanopi untuk restoran, dan banyak lagi. Dengan personalisasi kanopi, Anda dapat menciptakan tampilan yang unik dan sesuai dengan keinginan Anda.
          </p>
          <p className="canopysp">
            Kanopi dapat dibuat dari berbagai material, dan pilihan materialnya akan bergantung pada kebutuhan dan preferensi Anda. Berikut adalah beberapa material yang umum digunakan untuk membuat kanopi:
          </p>
          <ol className="canopysol">
              <li>
                  <strong>Baja ringan</strong> adalah jenis material yang umum digunakan dalam konstruksi sebagai rangka atau kerangka untuk berbagai proyek bangunan. Ini terbuat dari baja yang diproses dengan teknik khusus untuk menghasilkan material yang lebih ringan dibandingkan dengan baja konvensional, tetapi tetap mempertahankan kekuatan yang tinggi. Baja ringan memiliki berbagai keunggulan Tahan korosi, Fleksibilitas, dan hemat biaya. Maka baja ringan menjadi pilihan dalam pembuatan kerangka kanopi.
              </li>
              <li>
                <strong>Besi hollow hitam</strong> adalah jenis material logam yang memiliki bentuk seperti tabung berongga dengan bagian dalam yang kosong atau terbuka, sama seperti besi hollow pada umumnya. Yang membedakan besi hollow hitam dari besi hollow galvanis adalah bahwa besi hollow hitam tidak memiliki lapisan seng galvanisasi yang melindungi permukaannya. Oleh karena itu, besi hollow hitam lebih rentan terhadap korosi atau karat dibandingkan dengan besi hollow galvanis. Besi hollow galvanis telah dilapisi dengan lapisan seng melalui proses galvanisasi yaitu dengan proses pencelupan besi hollow ke dalam cairan seng panas atau pelapisan seng secara elektrokimia. Lapisan seng yang melekat pada permukaan besi hollow berfungsi sebagai pelindung terhadap korosi atau karat. Ini membuat besi hollow galvanis lebih tahan terhadap kondisi cuaca ekstrem, kelembaban, dan kerusakan yang disebabkan oleh elemen lingkungan.
              </li>
          </ol>
          <p className="canopysp">
            Pemilihan atap kanopi keputusan penting dalam pembangunan kanopi, karena atap berperan penting dalam melindungi dari elemen cuaca dan memberikan estetika pada struktur. Berikut bahan material dalam pemilihan atap kanopi:
          </p>
          <ol className='canopysol'>
            <li>
              <strong>
                Kanopi Kaca Tempered
              </strong>
            </li>
            <li>
              <strong>
                Kanopi Alderon
              </strong>
            </li>
            <li>
              <strong>
                Kanopi Spandek
              </strong>
            </li>
            <li>
              <strong>
                Kanopi Polycarbonate
              </strong>
            </li>
            <li>
              <strong>
                Kanopi Solarflat
              </strong>
            </li>
            <li>
              <strong>
                Kanopi Solartuff
              </strong>
            </li>
          </ol>
          <p className="canopysp">
            Pemilihan material kanopi harus mempertimbangkan faktor seperti iklim lokal, tampilan yang diinginkan, kebutuhan fungsional, dan anggaran. Penting juga untuk memastikan bahwa instalasi kanopi dilakukan dengan benar agar tahan terhadap elemen cuaca dan berfungsi sesuai yang diharapkan. Dengan personalisasi kanopi, Anda dapat menciptakan tampilan yang unik dan sesuai dengan keinginan Anda. kami akan senang membantu Anda dalam membangun kanopi yang sesuai dengan keinginan Anda.
          </p>
        </div>
        
        {/* <div>
          <a href='/contact'>tes</a>
        </div> */}


      </div>
    )
};

export default Canopy;