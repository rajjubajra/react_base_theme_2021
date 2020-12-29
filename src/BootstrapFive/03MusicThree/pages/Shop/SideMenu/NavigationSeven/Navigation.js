import React from 'react';
import { Link } from 'react-router-dom';



function Navigation() {
  return (
    <ul class="list-group">
      <li class="list-group-item"><Link to="#">CD</Link></li>
      <li class="list-group-item"><Link to="#">Accessories</Link></li>
      <li class="list-group-item"><Link to="#">T-Shirts</Link></li>
      <li class="list-group-item"><Link to="#">DVD</Link></li>
      <li class="list-group-item"><Link to="#">Vinly</Link></li>
      <li class="list-group-item"><Link to="#">Books</Link></li>
    </ul>
  )
}
export default Navigation