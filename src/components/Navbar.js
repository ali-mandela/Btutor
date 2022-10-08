import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo.png';
import '../css/Navbar.css'



const Navbar = () => {
  const [ menu, setMenu] = useState(false);

  function handleChange(){
    setMenu(!menu);
  }

  return (<>
    <section className='navbar-main'>
        <div className='navbar'>
            <ul>
                {/* <li><NavLink to='/'>Home</NavLink></li> */}
                <li><NavLink to="/about" className="links">About</NavLink></li>
                <li><NavLink to='/contact' className="links">Contact</NavLink></li>
                <li className='imgLogoLi'><NavLink to="/"><img className='imglogo' src={logo} alt="logo"/></NavLink></li>
                <li><NavLink to='/career' className="links">Career</NavLink></li>
                <li><NavLink to='/apply' className="links">Apply now</NavLink></li>
            </ul> 
            
        </div>
        <div className='mainMobileNavbar'>
        <NavLink to="/"><img className='imglogo' src={logo} alt="logo"/></NavLink>
        {menu && <i className="fa-3x faIcons fa-solid links fa-bars" onClick={handleChange}></i>}

        {/* {menu === true ?   <i class="fa-3x faIcons fa-solid fa-xmark"  onClick={handleChange}></i>:<i className="fa-3x faIcons fa-solid fa-bars" onClick={handleChange}></i>} */}
            {!menu && <ul className='mobileNavbar'> 
            {!menu &&   <i class="fa-3x faIcons fa-solid links fa-xmark"  onClick={handleChange}></i>}

                <li><NavLink to="/about" className="links">About</NavLink></li>
                <li><NavLink to='/contact' className="links">Contact</NavLink></li> 
                <li><NavLink to='/career' className="links">Career</NavLink></li>
                <li><NavLink to='/apply' className="links">Apply now</NavLink></li>
            </ul>} 
        </div>
    </section>
  </>)
}

export default Navbar