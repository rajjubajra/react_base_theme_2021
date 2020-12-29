import React from 'react'
import Nav from '../components/header/Nav';


export const About = () => {
  return (
    <div className='base-theme'>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col"><h1>About</h1></div>
        </div>
      </div>
    </div>
  )
}

export default About;
