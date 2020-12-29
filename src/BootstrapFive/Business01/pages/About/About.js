import React from 'react'
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import FooterTwo from '../../components/footer/FooterTwo/FooterTwo';
import HalfImageBlock from './HalfImageBlock';
import Team from '../Team/Team';



export const About = () => {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <div className='business-one'>
      <div className={className}>

        <ColourMode />
        <NavigationOne />


        <div className="container-fluid">

          <div className="row min-vh-100 justify-content-center">

            <HalfImageBlock />

            {/** ABBOUT US TEXT CONTENT */}
            <div className="col-lg-8 col-md-10 col-sm-11">
              <h1 className="mb-5 mt-5">Introduction</h1>
              <img
                style={{ maxWidth: "380px", width: "100%", padding: "0px 20px 20px 0px", float: "left" }}
                src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/japan1.jpg"
                alt="about" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ipsa incidunt ullam quae. Ullam, veritatis quibusdam repellendus earum cum porro voluptas, natus minus, asperiores nihil sapiente illo eos! Voluptatem, error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolor officiis corrupti atque sint hic, minus laboriosam error omnis dignissimos doloremque illo, nisi assumenda esse, optio facere rem consequatur debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum reiciendis molestias ipsam consequatur voluptates. Ad fuga, aliquid eos labore odit, sit saepe, placeat nemo provident earum quidem possimus. Rerum, totam.</p>

              <p>Yrem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ratione nesciunt. Debitis repudiandae dolore cupiditate assumenda consectetur necessitatibus voluptatum, aliquam similique maiores sequi exercitationem est ducimus quidem accusantium quae? Quia!</p>
            </div>
          </div>


          {/** TEAM */}
          <div className="row mb-5 mt-5">
            <Team />
          </div>




          {/** FOOTER */}
          {/** 'hide' props set display-none to about content on footer*/}
          <div className="mt-5">
            <FooterTwo hide={true} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;
