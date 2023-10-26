import React from 'react';
import "./Feature.css";
import { Container } from 'react-bootstrap';
import { CardChecklist, BarChart, Binoculars } from 'react-bootstrap-icons';

function Feature() {
  return (
    <section id="featured" className="featured">
      <Container>
        
        <div className="row">
            <div className="col-lg-4">
              <div className="icon-box">
                <i><CardChecklist/></i>
                <h3><a href="#/">Kenapa memilih kami?</a></h3>
                <p>
                  Kami memiliki pengalaman lebih dari 15 Tahun dalam bidang Fabrikasi & Pekerjaan Metal, yang telah banyak berkontribusi dalam berbagai proyek seperti proyek Konstuksi Bangunan, Konstruksi Jembatan, Fabrikasi Alat Berat, Fabrikasi Tower, Fabrikasi Trafo dan banyak jenis Fabrikasi lain telah kami kerjakan dengan tingkat kepuasan pelanggan yang sangat baik.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i><BarChart/></i>
                <h3><a href="#/">kualitas</a></h3>
                <p>
                  Kami selalu memastikan produk yang kami kirim memiliki kualitas yang sesuai dengan kebutuhan pelanggan.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i><Binoculars/></i>
                <h3><a href="#/">Pengiriman</a></h3>
                <p>Untuk memastikan produk terkirim dengan cepat, kami memiliki berbagai macam armada transportasi dari mulai Truk hingga Trailer.</p>
              </div>
            </div>
          </div>

      </Container>
    </section>
  );
}

export default Feature;
