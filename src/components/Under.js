import React from 'react'
import '../css/Under.css'

const Under = (p) => {
  return (<>
  <section className='under'>
  <div className='undermain'>
        <h1>{p.heading} Page</h1>
        <p>This site is under construction</p>
  </div>
  </section>
  </> )
}

export default Under