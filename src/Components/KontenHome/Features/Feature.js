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
                <h3><a href="#/">Lorem Ipsum</a></h3>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i><BarChart/></i>
                <h3><a href="#/">Dolor Sitema</a></h3>
                <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i><Binoculars/></i>
                <h3><a href="#/">Sed ut perspiciatis</a></h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
          </div>

      </Container>
    </section>
  );
}

export default Feature;
