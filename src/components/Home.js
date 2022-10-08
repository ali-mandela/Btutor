import '../css/Home.css'
// import Carousel from './carousel'
// import pp from '../Assets/b2.svg'
// import heroimg2 from '../Assets/heroimg2.svg'
import heroimg4 from '../Assets/heroimg4.svg' 


// heroimg3
const Home = () => {

 
  return (<> 
  <section className='home'>
    <div className='homeHeader'>
      <div className='homeHeaderTitle'>
        <h1 className='homeHeaderTitleTop'>
          Binary Tutor
        </h1>
        <span className='homeHeaderTitleSpan'>
          Looking for Personal Tutor  
        </span>
        <a href="https://www.softr.io/blog/free-svg-illustrations#manypixels" > <h3 className='homeHeaderTitleh3'>Let's Chat
        </h3> </a>
         <p className='homeHeaderTitlep'>
         Binary Tutor Company is an innovative new platform that connects teachers with students who are looking for a mentor or tutor. We are currently recruiting teachers across the Kargil,Ladakh to join our team as we grow!
        </p> 
      </div>
      <div className='homeHeaderImg'>
      <img src={heroimg4} alt="poic"/>
      </div>
    </div>
  </section>
  </>)
}

export default Home

/* <div data-tf-widget="vYqoh5aC" data-tf-iframe-props="title=B Tutor" data-tf-medium="snippet" style="width:100%;height:400px;"></div><script src="//embed.typeform.com/next/embed.js"></script> */