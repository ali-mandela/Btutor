import '../css/Home.css'
// import Carousel from './carousel'
import pp from '../Assets/b2.svg'
import heroimg2 from '../Assets/heroimg2.svg'
import heroimg4 from '../Assets/heroimg4.svg'
import Navbar from './Navbar'


// heroimg3
const Home = () => {

 
  return (<>
  <Navbar/>
  <section className='home'>
    <div className='homeHeader'>
      <div className='homeHeaderTitle'>
        <h1 className='homeHeaderTitleTop'>
          Binary Tutor
        </h1>
        <span className='homeHeaderTitleSpan'>
          Looking for Personel Tutor  
        </span>
        <a href="https://www.softr.io/blog/free-svg-illustrations#manypixels" > <h3 className='homeHeaderTitleh3'>Contact us
        </h3> </a>
         <p className='homeHeaderTitlep'>
         Pixabay.com is a free stock photography and royalty-free stock media website. It is used for sharing photos, illustrations, vector graphics, film footage, and music, exclusively under the custom Pixabay license, which generally allows the free use of the material with some restrictions. The overall quality of the photos on the service has been described as "mediocre for the most part" and "variabl... Wikipedia
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

{/* <div data-tf-widget="vYqoh5aC" data-tf-iframe-props="title=B Tutor" data-tf-medium="snippet" style="width:100%;height:400px;"></div><script src="//embed.typeform.com/next/embed.js"></script> */}