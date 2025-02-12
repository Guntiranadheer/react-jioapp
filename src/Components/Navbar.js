import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className='nav-section'>
      
      <ul>
        <li className='jio'> <h5>Jio</h5></li>
    <Link to="/mobile">
    <li className='mobile text-white'> Mobile </li>
    </Link>
    <Link to="/True5g">
    <li className='text-white'> True5g</li>
    </Link>
    <Link to="/Jiofiber"> <li className='text-white'>JioFiber</li></Link>
    <Link to="AirFiber"><li className='text-white'> AirFiber</li></Link>
    <Link to="/Bussiness"> <li className='text-white'> Business</li></Link> 
     <Link to="/Devices"> <li className='text-white'>Devices</li></Link>
     <Link to="/Apps"> <li className='text-white'> Apps</li></Link>
     <i className="fa-solid fa-magnifying-glass search-icon"></i>
     <i className="fa-solid fa-person Login-icon "></i>
     </ul>

    </nav>
    
    </div>
  )
}

export default Navbar;