import React from 'react'
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode'
import AboutBg from './AboutBg';
import Title from '../../components/header/Titlte/Title';
import Footer from '../../components/footer/Footer';

export const About = () => {

  /** dyanamic color */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);


  const textbg = {
    position: 'relative',
    padding: "40px 60px",
    zIndex: "10",
  }

  return (
    <div className="blog-four">

      <div className={className}>
        <ColourMode />
        <NavigationOne />

        <Title title="About" hideLink={true} />

        <div className="container mt-5 mb-5 min-vh-100">
          <div className="row">
            <div className="col-lg-3 col-md-3"></div>

            <div className="col-lg-9 col-md-9">

              <div style={textbg} className="pr-4 mt-3">
                <h1>Introduction</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel minus praesentium nihil veniam nostrum voluptatem illo? Delectus officiis laboriosam, doloremque molestias, reiciendis beatae mollitia laudantium perferendis blanditiis adipisci repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, enim eveniet pariatur voluptatum facere maiores ipsam id rerum quisquam, dolor saepe commodi sint voluptates accusantium suscipit adipisci optio, quaerat sit.</p>

                <p>A ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim rem dolorum! Et ullam necessitatibus laborum incidunt velit ducimus beatae soluta! Voluptatum, distinctio tempore quidem tenetur ab praesentium molestias commodi.</p>

                <p>Dolor sit amet, consectetur adipisicing elit. Laudantium laboriosam similique deserunt tenetur consectetur consequatur ex suscipit in sed doloribus necessitatibus cumque sit harum vitae fugiat, quisquam soluta modi ipsa?</p>
              </div>
              <AboutBg />
            </div>

          </div>
        </div>

        <div className="pb-5">
          <Footer />
        </div>


      </div>
    </div>
  )
}

export default About;
