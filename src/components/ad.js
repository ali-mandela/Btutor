import React, { useState } from 'react'

function Ad() {

    const d =  new Date();
    const showTime = d.toLocaleTimeString();
        const [t,setT]= useState(showTime)
        setInterval(()=>{
            setT(showTime)
        }, 1000); 
        
  return (<>
    <div className='bb'>
    <h2 className='tt'>{t}</h2>
        <h1>Currently we are under building process</h1>
        <p>Visit after few hours</p>
        <div>
            <h6>
                Thank you
            </h6>
            <h5>B tutor</h5>
        </div>
        
    </div>

  </> )
}

export default Ad