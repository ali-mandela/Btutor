import React, { useState } from 'react'
import '../css/carousel.css'
import bannerimager from '../data'

const Carousel = () => {
    const [ index, setIndex] = useState(1);
    // console.log(index);
    console.log(bannerimager.length);

    function handleUp(){
        if(index>=bannerimager.length)
        {
            setIndex(1)
        }
        else{
            setIndex(index+1);
        }
            
    }
    function handelDown(){
        if(index<=1)
        {
            setIndex(3)
        }
        else{
            setIndex(index-1);

        }
    }
    // setInterval(() => {
    //     if(index>=bannerimager.length)
    //     {
    //         setIndex(1)
    //     }
    //     else{
    //         setIndex(index+1);
    //     }
    //     if(index<=1)
    //     {
    //         setIndex(3)
    //     }
    //     else{
    //         setIndex(index-1);

    //     }

    // }, 5000);
  return (<>
  <h1>{index}</h1>
    {bannerimager.map((props)=>{
        return(
            <><div className={props.index===index? "car activee":"car"}>
            <img src={props.url} alt={props.alt} key={props.index}/>
                <h1>: {props.alt}</h1>
                <i className="fa-solid fa-3x fa-circle-left" onClick={handelDown}></i>
        <i className="fa-solid fa-3x fa-circle-right" onClick={handleUp}></i>
            </div>
               
            </>
        )
    })}
    
    <div className='sp'>
        
    </div>
    </>)
}

export default Carousel