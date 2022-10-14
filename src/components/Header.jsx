import React from 'react'
import '../css/Header.css'
import Under from './Under'

const Header = () => {
  return (<> 
  <section className='headerMain'> 
  <div className='headerLeft'> 

    <div className='headerbox'>
    
        <h1>Start</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the .</p>
    </div><div className='headerbox'>
        <h1>Mid</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the .</p>
    </div><div className='headerbox'>
        <h1>GET MENTOR</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the .</p>
    </div>
    <button >Get Tutor</button>

    </div>

    <div className='headerRight'> 
    <div className='headerbox'>
        <h1>Start</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the .</p>
    </div>
    <div className='headerbox'>
        <h1>Mid</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the .</p>
    </div>
    <div className='headerbox'>
        <h1>Teacher</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the .</p>
    </div>
    <button >Apply </button>
    </div>
   
  </section> 
  </> )
}

export default Header