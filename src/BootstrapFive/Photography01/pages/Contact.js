import React from 'react'
import NavigationOne from '../components/header/NavigationOne/NavigationOne';
import FormOne from './FormOne/FormOne';
import styled from 'styled-components';


const Image = styled.div`
outline: 1px solid #000000;
img{
  width: 100%;
  height: 350px;
  object-fit: cover;
  filter: blur(2px) grayscale(90%);
  
}
`

export const Contact = () => {
  return (
    <div className='photography-one'>
      <NavigationOne />
      <div className="container min-vh-100">
        <div className="row">
          <div className="col mt-5">
            <h1>Contact</h1>
            <Image>
              <img src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/tibetan-prayer-flags-1384193_1280.jpg"
                alt="contact" />
            </Image>
          </div>
        </div>
        <div className="row">
          <div className="col mt-5">
            <div className="mt-5">
              <p>Dolor sit amet consectetur adipisicing elit. Cumque neque error architecto tempora nesciunt nam quae! Impedit suscipit explicabo officiis placeat modi doloremque. Hic ad possimus quae labore maxime quis.</p>
            </div>
            <div className="mt-5 pt-5">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Tel: 00 000 000 000</li>
                <li className="list-group-item">Email: email@example.com</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <FormOne />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
