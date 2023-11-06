import React from 'react';
import './KitchenSet.css';

import KitchenSetImg from "../../../assets/img/kitchenset.png"


function KithcenSet () {

    return(
      <div className="kitchen-railing-container">
        <h1><strong>Jasa Pembuatan Kitchen Set</strong></h1>
        <div className="kitchen-main-photo">
          {/* <img
            src="https://pakama.co.id/public/uploads/pakama-jasa-pemasangan-granit-lantai-dan-meja-dapur.jpg"
            alt="jasa pemasangan granit lantai dan meja dapur"
          /> */}
          <img src={KitchenSetImg} alt='set dapur'/>
        </div>

        <div className="single-service-text recent-single-text pt_30">
          <p className="kitchenp">
            Kitchen set adalah sistem penyusun khusus yang dirancang untuk dapur. Ini termasuk berbagai jenis lemari dapur, rak penyimpanan, laci, dan komponen lainnya yang dirancang untuk menyediakan ruang penyimpanan dan area kerja yang efisien dalam dapur. Kitchen set sering kali terbuat dari berbagai jenis material, seperti kayu, laminasi, MDF (Medium-Density Fiberboard), dan bahan lainnya. Fungsinya adalah untuk penyusun dan menyimpan peralatan dapur, peralatan makan, bahan makanan, dan peralatan memasak, serta menyediakan permukaan kerja untuk mempersiapkan makanan.
          </p>
          <p className="kitchenp">
            Berikut ini bahan yang digunakan untuk membuat kitchen set:
          </p>
          <ol className="kitchenol">
              <li>
                  <strong>Multiplek atau Plywood:</strong> Multiplek adalah jenis material kayu yang terdiri dari beberapa lapisan tipis lembaran kayu (veneer) yang disusun bersama-sama dan ditempelkan dengan menggunakan lem atau perekat khusus. Multiplek terbuat dari kayu asli dan biasanya terdiri dari tiga lapisan atau lebih, dengan lapisan inti yang ditempatkan di antara lapisan permukaan. Lapisan-lapisan ini bisa memiliki berbagai ketebalan tergantung pada spesifikasi materialnya.
              </li>
              <li>
                  <strong>Particle Board:</strong> Particle board adalah bahan yang serupa dengan MDF, tetapi terbuat dari serpihan kayu yang ditekan bersama-sama dengan lem. Ini adalah bahan yang lebih ekonomis dan sering digunakan sebagai papan dasar untuk furnitur.
              </li>
              <li>
                  <strong>Medium-Density Fiberboard (MDF):</strong> MDF adalah bahan serat yang dibuat dari kayu yang diolah menjadi serat halus dan dicampur dengan perekat. Ini adalah bahan yang sering digunakan dalam pembuatan pintu lemari, rak, dan panel. MDF cukup kuat dan memungkinkan finishing yang halus.
              </li>
              <li>
                  <strong>Aluminium Composite Panel (ACP):</strong> Aluminium Composite Panel (ACP) adalah material komposit yang terdiri dari dua lembaran tipis aluminium yang ditempatkan pada kedua sisi inti yang biasanya terbuat dari bahan non-aluminium. Inti tersebut dapat terbuat dari berbagai material, seperti bahan plastik, mineral, atau bahan komposit lainnya. ACP digunakan untuk berbagai aplikasi arsitektur dan desain interior karena memiliki berbagai keunggulan, termasuk tampilan yang estetis, kuat, ringan, dan tahan cuaca.
              </li>
          </ol>
        </div>
        
        {/* <div>
          <a href='/contact'>tes</a>
        </div> */}


      </div>
    )
};

export default KithcenSet;