import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo.png';
const Navbar = () => {
  return (<>
    <section className='navbar-main'>
        <div className='navbar'>
            <ul>
                {/* <li><NavLink to='/'>Home</NavLink></li> */}
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to="/"><img className='imglogo' src={logo} alt="logo"/></NavLink></li>
                {/* <li><NavLink to='/policies'>Policies</NavLink></li> */}
                <li><NavLink to='/career' >Career</NavLink></li>
                <li><NavLink to='/apply'>Apply now</NavLink></li>
            </ul>
        </div>
    </section>
  </>)
}

export default Navbar