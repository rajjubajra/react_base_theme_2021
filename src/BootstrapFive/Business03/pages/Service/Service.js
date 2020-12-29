import React from 'react';
import './Service.scss';
import IconCart from './Icons/IconCart';
import IconDisplay from './Icons/IconDisplay';
import IconSecurity from './Icons/IconSecurity';


function Service() {
  return (
    <section className="page-section my-5" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className="row text-center my-5">
          <div className="col-md-4">
            <div className="service-card">
              <span className="my-3">
                <IconCart />
              </span>
              <h4 className="my-3">E-Commerce</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <span className="my-3">
                <IconDisplay />
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <span className="my-3">
                <IconSecurity />
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
