import React from 'react';
import "./Feature.css";
import { Container } from 'react-bootstrap';
import { CardChecklist, GraphUpArrow, AwardFill } from 'react-bootstrap-icons';

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
                  Kami memiliki pengalaman lebih dari 15 Tahun dalam bidang jasa Bengkel Las dan renovasi Rumah. Memiliki karyawan yang bepengalaman dalam bidang nya dan tidak perlu diragukan lagi bahwa Kami telah menyelesaikan lebih dari 100 project dengan tingkat kepuasan pelanggan yang sangat baik.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i><AwardFill/></i>
                <h3><a href="#/">kualitas</a></h3>
                <p>
                  Kami menjamin quality control terhadap produk yang kami buat dengan kualitas yang terbaik sesuai dengan kebutuhan pelanggan.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i><GraphUpArrow/></i>
                <h3><a href="#/">Integritas</a></h3>
                <p>
                  Kami berkomitmen untuk memenuhi janji-janji kami kepada pelanggan dan mitra bisnis, karena itu adalah bagian dari integritas kami.
                </p>
              </div>
            </div>
          </div>

      </Container>
    </section>
  );
}

export default Feature;
