import React from 'react'
import './About.scss';


export const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center my-5">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>

        <ul className="timeline mt-5">
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/img/about/1.jpg"
                alt="" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2010</h4>
                <h4 className="subheading">Beginnings</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                                unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/img/about/2.jpg"
                alt="" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>March 2013</h4>
                <h4 className="subheading">An Business is Born</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                                unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/img/about/3.jpg"
                alt="" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>December 2018</h4>
                <h4 className="subheading">Full Service starts</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                                unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="assets/img/about/4.jpg"
                alt="" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>July 2020</h4>
                <h4 className="subheading">Expansions</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                                unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4 style={{ color: "#dddddd", weight: "900" }}>
                Of Our<br />Story!</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>


  )
}

export default About;
