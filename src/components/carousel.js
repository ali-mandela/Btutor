// import React, { useEffect, useState } from 'react'
// import '../css/carousel.css'
// import bannerimager from '../data'

// const Carousel = () => {
//     const [ index, setIndex] = useState(1);
//     // // console.log(index);
//     // console.log(bannerimager.length);

//     function handleUp(){
//         if(index>=bannerimager.length)
//         {
//             setIndex(1)
//         }
//         else{
//             setIndex(index+1);
//         }
            
//     }
//     // function handelDown(){
//     //     if(index<=1)
//     //     {
//     //         setIndex(3)
//     //     }
//     //     else{
//     //         setIndex(index-1);

//     //     }
//     // }
//     useEffect(()=>{
//             setInterval(() => {
//          handleUp();
//          }, 5000);
//     },[])
//     // setInterval(() => {
//     //      handleUp();
//     //      }, 10000);
//   return (<>
//     {bannerimager.map((props)=>{
//         return(
//             <><div className={props.index===index? "car activee":"car"}>
//             <img src={props.url} alt={props.alt} key={props.index}/>
//                 {/* <i className="fa-solid fa-3x fa-circle-left" onClick={handelDown}></i> */}
//         {/* <i className="fa-solid fa-3x fa-circle-right" onClick={handleUp}></i> */}
//             </div>
               
//             </>
//         )
//     })}
    
//     </>)
// }

// export default Carousel