import React from 'react';
import './StarRailing.css';

//import image
import Pagar from "../../../assets/img/pagepagar.png"
import Pagar1 from "../../../assets/img/pagepagar2.png"

function StarRailing () {

    return(
      <div className="star-railing-container">
        <h1><strong>Jasa Pembuatan Pagar dan Tangga</strong></h1>
        <div className="service-main-photo">
          {/* <img
            src="https://pakama.co.id/public/uploads/pakama-jasa-pemasangan-granit-lantai-dan-meja-dapur.jpg"
            alt="jasa pemasangan granit lantai dan meja dapur"
          /> */}
          <img src={Pagar} alt='pagar'/>
        </div>

        <div className="single-service-text recent-single-text pt_30">
          <p className="starrailingp">
            Pembuatan pagar dan tangga adalah bidang jasa yang penting dalam industri konstruksi dan perbaikan rumah. Pagar berfungsi sebagai pengaman, batas properti, dan unsur estetika, sementara tangga merupakan elemen penting dalam menghubungkan lantai yang berbeda dalam bangunan.
          </p>
          <p className="starrailingp">
            Pagar digunakan untuk melindungi dan mengamankan suatu area atau properti dari akses yang tidak diinginkan atau intrusi. Ini bisa melindungi rumah, perkebunan, atau lahan komersial dari pencurian, dan pagar juga dapat menjaga privasi pemilik rumah.
          </p>
          <p className="starrailingp">
            Pagar dapat terbuat dari berbagai material, termasuk besi, kayu, aluminium, beton, atau bahan lainnya. Pilihan material pagar akan tergantung pada tujuan, tampilan yang diinginkan, dan kondisi lingkungan. Pemilihan desain dan bahan pagar dapat sangat memengaruhi keindahan dan fungsionalitas pagar tersebut dalam konteks properti.
          </p>
         {/* <p>
          Pagar berfungsi sebagai pengaman, batas properti, dan unsur estetika, sementara tangga merupakan elemen penting dalam menghubungkan lantai yang berbeda dalam bangunan.
         </p> */}
        </div>

        <div className="service-main-photo-ii">
          <img src={Pagar1} alt='pagar'/>
        </div>

        <div className="single-service-text recent-single-text pt_30">
          <p className="starrailingp">
            Bagi Anda yang memiliki Rumah dengan luas tanah terbatas anda dapat memilih jenis tangga putar. Jenis tangga ini menjadi alternatif untuk rumah Anda. Dari segi harganya tangga ini relatif sangat terjangkau  dan tidak memerlukan pengecoran beton pada tangga yang membuat harga tangga menjadi sangat mahal.
          </p>
          <p className="starrailingp">
            Saat ini banyak bengkel las dapat menyediakan design tangga yang bervariasi, mulai dari yang bermodel klasik sampai medel kekinian. Pemilihan desain tangga untuk rumah sangat tergantung pada preferensi pribadi, tema rumah, dan anggaran. Jika rumah Anda memiliki desain minimalis, maka memilih tangga model minimalis dapat membuat keselarasan dan konsistensi dalam estetika rumah Anda. Tim kami tersedia untuk membantu Anda dengan konsultasi atau pemesanan. Jangan ragu untuk menghubungi kami melalui salah satu kontak kami yang ada di halaman contact.
          </p>
        </div>

        {/* <div>
          <a href='/contact'>tes</a>
        </div> */}


      </div>
    );
};

export default StarRailing;