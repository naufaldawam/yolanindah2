import React from 'react';
import './HomeRenovation.css';

import Homerenovimg from "../../../assets/img/homrenov.png"


function HomeRenovation () {

    return(
      <div className="home-railing-container">
        <h1><strong>Jasa Renovasi Rumah</strong></h1>
        <div className="homerenov-main-photo">
          {/* <img
            src="https://pakama.co.id/public/uploads/pakama-jasa-pemasangan-granit-lantai-dan-meja-dapur.jpg"
            alt="jasa pemasangan granit lantai dan meja dapur"
          /> */}
          <img src={Homerenovimg} alt='home renov'/>
        </div>

        <div className="single-service-text recent-single-text pt_30">
          <p className="homerenovp">
            Jasa perbaikan rumah sangat diperlukan saat ini. Salah satu alasan masyarakat memilih merenovasi rumahnya dibandingkan membeli baru adalah karena lebih hemat. Hal ini perlu diperhatikan dengan matang agar proses renovasi rumah Anda dapat berjalan  lebih maksimal. Hal ini penting karena merenovasi rumah bukanlah hal yang mudah dan murah. Jika perencanaan tidak tepat maka biaya renovasi rumah bisa membengkak dan yang lebih menyebalkan lagi adalah hasil renovasi  tidak sesuai harapan.
          </p>
          <p className="homerenovp">
            Untuk kebutuhan tersebut, penyedia layanan yang ditunjuk harus memperhatikan. Sedapat mungkin harus dapat diandalkan, berpengalaman, memiliki portofolio untuk dipertimbangkan, dan berkomitmen untuk memproduksi sesuai pesanan. Tidak dapat disangkal bahwa biaya memegang peranan penting dalam mewujudkan proyek renovasi rumah impian Anda.
          </p>
          <p className="homerenovp">
            Namun anda tidak perlu khawatir <strong> PT Yolan Indah Nusantara </strong> dapat memberikan Anda solusi dan rekomendasi untuk mewujudkan rumah impian Anda. Dapatkan penawaran dengan mengunjungi bengkel kami atau menghubungi bagian pemasaran kami.
          </p>
         {/* <p>
          Pagar berfungsi sebagai pengaman, batas properti, dan unsur estetika, sementara tangga merupakan elemen penting dalam menghubungkan lantai yang berbeda dalam bangunan.
         </p> */}
        </div>

        {/* <div className="service-main-photo-ii">
          <img src={Pagar1} alt='pagar'/>
        </div> */}

        {/* <div className="single-service-text recent-single-text pt_30">
          <p className="homerenovp">
            Bagi Anda yang memiliki Rumah dengan luas tanah terbatas anda dapat memilih jenis tangga putar. Jenis tangga ini menjadi alternatif untuk rumah Anda. Dari segi harganya tangga ini relatif sangat terjangkau  dan tidak memerlukan pengecoran beton pada tangga yang membuat harga tangga menjadi sangat mahal.
          </p>
          <p className="homerenovp">
            Saat ini banyak bengkel las dapat menyediakan design tangga yang bervariasi, mulai dari yang bermodel klasik sampai medel kekinian. Pemilihan desain tangga untuk rumah sangat tergantung pada preferensi pribadi, tema rumah, dan anggaran. Jika rumah Anda memiliki desain minimalis, maka memilih tangga model minimalis dapat membuat keselarasan dan konsistensi dalam estetika rumah Anda. Tim kami tersedia untuk membantu Anda dengan konsultasi atau pemesanan. Jangan ragu untuk menghubungi kami melalui salah satu kontak kami yang ada di halaman contact.
          </p>
        </div> */}

        {/* <div>
          <a href='/contact'>tes</a>
        </div> */}


      </div>
    )
};

export default HomeRenovation;