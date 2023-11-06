import React from 'react';
import './Welding.css';

import Welderimg from "../../../assets/img/welder.png"


function Welding () {

    return(
      <div className="welder-railing-container">
        <h1><strong>Jasa Pengelasan</strong></h1>
        <div className="welding-main-photo">
          {/* <img
            src="https://pakama.co.id/public/uploads/pakama-jasa-pemasangan-granit-lantai-dan-meja-dapur.jpg"
            alt="jasa pemasangan granit lantai dan meja dapur"
          /> */}
          <img src={Welderimg} alt='welding'/>
        </div>

        <div className="single-service-text recent-single-text pt_30">
          <p className="weldingp">
            <strong>Las</strong> merupakan penyambungan (besi dan sebagainya) dengan cara membakar, sedangkan Pengelasan adalah suatu proses penyambungan dua atau lebih benda dengan cara melelehkan logam atau bahan lain di antara mereka dan kemudian mendinginkannya untuk membentuk sambungan yang kuat. Proses pengelasan umumnya dilakukan dengan menggunakan panas yang tinggi, seringkali dengan bantuan elektris atau gas
          </p>
          <p className="weldingp">
            Untuk melelehkan bahan dasar yang akan digabungkan. Ini adalah teknik yang sangat umum digunakan dalam berbagai industri, termasuk konstruksi, manufaktur, otomotif, dan banyak lagi. Bengkel las merupakan suatu usaha yang bergerak di bidang pengelasan atau jasa pengelasan berbagai jenis logam seperti besi dan stainless steel. <strong>PT Yolan Indah Nusantara</strong> menyediakan jasa las untuk kebutuhan rumah dan kantor.
          </p>
          <p className="weldingp">
            Kami memiliki pengalaman dalam pembuatan semua jenis <strong>pagar, railing tangga, teralis, Kanopi dll</strong>. Kami selalu memberikan pelayanan yang maksimal untuk memuaskan pelanggan kami karena itulah integritas bisnis kami. Sebelum melaksanakan pekerjaan, kami selalu berkoordinasi untuk menyampaikan informasi mengenai bahan dan waktu pengerjaan sehingga pelanggan tidak perlu khawatir. 
          </p>
          <p className="weldingp">
            Jika anda perlu melakukan pemesanan atau membutuhkan jasa bengkel las, anda dapat menghubungi bengkel las kami.
          </p>
        </div>
        
        {/* <div>
          <a href='/contact'>tes</a>
        </div> */}


      </div>
    )
};

export default Welding;