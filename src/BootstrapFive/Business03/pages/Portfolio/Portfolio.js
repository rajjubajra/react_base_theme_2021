import React from 'react';
import './Portfolio.scss';

function Portfolio() {
  return (

    <section className="page-section py-5" id="portfolio">
      <div className="container">
        {/** TITLE */}
        <div className="text-center mb-5">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>

        {/** CONTENTS */}
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/chairs-2181994_1280.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Interior</div>
                <div className="portfolio-caption-subheading text-muted">Illustration</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/breakfast-4234067_1280.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Food</div>
                <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/living-room-2155376_1280.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Furniture</div>
                <div className="portfolio-caption-subheading text-muted">Identity</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/computer-4484282_1280.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Table</div>
                <div className="portfolio-caption-subheading text-muted">Branding</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/office-336368_1280.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Meet</div>
                <div className="portfolio-caption-subheading text-muted">Website Design</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/desk-3076954_1280.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">A Desk</div>
                <div className="portfolio-caption-subheading text-muted">Photography</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Portfolio
