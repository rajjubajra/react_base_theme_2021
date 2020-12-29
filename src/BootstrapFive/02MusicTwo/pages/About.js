import React from 'react'
import { useSelector } from 'react-redux';
import BackgroundText from '../components/BackgroundText';
import ColourMode from '../components/ColourMode/ColourMode';
import NavigationOne from '../components/header/NavigationOne/NavigationOne';
import EmailNTel from './address/EmailNTel';




export const About = () => {

  /** DYANMIC COLOR THEME */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);



  return (
    <div className="music-two">

      <div className={className}>
        <ColourMode />
        <NavigationOne />
        <div className="container mt-5 min-vh-100">
          <BackgroundText text={"About"} />
          <div className="row">
            <div className="col">
              <h1>About</h1>
              <div className="mt-5">
                <h3 className="mb-5">Ipsum, dolor sit amet consectetur adipisicing elit. Odit esse autem officia. Repellat sed animi reprehenderit molestias blanditiis, amet perspiciatis dignissimos totam voluptatibus iure minima architecto rerum officiis asperiores quam.Officia. Repellat sed animi reprehenderit molestias blanditiis, amet perspiciatis dignissimos totam voluptatibus iure minima architecto rerum officiis asperiores quam</h3>
              </div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit esse autem officia. Repellat sed animi reprehenderit molestias blanditiis, amet perspiciatis dignissimos totam voluptatibus iure minima architecto rerum officiis asperiores quam. Opsum dolor sit amet consectetur adipisicing elit. Architecto debitis atque porro. Neque quas eos deleniti? Voluptatum eos quasi enim! Perspiciatis neque cum maxime vero accusantium harum vitae enim repellendus. Trem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum, corrupti nam odio, natus explicabo, deleniti at consectetur doloribus facilis laborum voluptatibus beatae repudiandae dolore eaque. Magni nemo pariatur quis. minima architecto rerum officiis asperiores quam. Opsum dolor sit amet consectetur adipisicing elit. Architecto debitis atque porro. Neque quas eos deleniti? Voluptatum eos quasi enim! Perspiciatis neque cum maxime vero accusantium harum vitae enim repellendus. Trem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum, corrupti nam odio, natus explicabo, deleniti at consectetur doloribus facilis laborum voluptatibus beatae repudiandae dolore eaque. Magni nemo pariatur quis</p>
              </div>
              <div>
                <p>
                  Smet consectetur adipisicing elit. Odit esse autem officia. Repellat sed animi reprehenderit molestias blanditiis, amet perspiciatis dignissimos totam voluptatibus iure minima architecto rerum officiis asperiores quam. Opsum dolor sit amet consectetur adipisicing elit. Architecto debitis atque porro. Neque quas eos deleniti? Voluptatum eos quasi enim! Perspiciatis neque cum maxime vero accusantium harum vitae enim repellendus. Trem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum, corrupti nam odio, natus explicabo, deleniti at consectetur doloribus facilis laborum voluptatibus beatae repudiandae dolore eaque. Magni nemo pariatur quis. minima architecto rerum officiis asperiores quam. Opsum dolor sit amet consectetur adipisicing elit. Architecto debitis atque porro. Neque quas eos deleniti? Voluptatum eos quasi enim! Perspiciatis neque cum maxime vero accusantium harum vitae enim repellendus. Trem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum, corrupti nam odio, natus explicabo, deleniti at consectetur doloribus facilis laborum voluptatibus beatae repudiandae dolore eaque. Magni nemo pariatur quis</p>
              </div>
            </div>
          </div>

          <div className="row">
            <EmailNTel />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;
