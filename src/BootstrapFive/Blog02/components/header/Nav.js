import React from 'react'
import './Nav.scss';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';


function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to={`${pagelink.home}`}>Home</Link></li>
        <li><Link to={`${pagelink.about}`}>About</Link></li>
        <li><Link to={`${pagelink.contact}`}>Contact</Link></li>
        <li><Link to={`${pagelink.back}`}>Back</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
