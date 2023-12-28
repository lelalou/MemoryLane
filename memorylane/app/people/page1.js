'use client'

import React, {Component} from 'react'
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
//import "./public/images"
import ImageDisplay from './imageDisplay';

// export default function HomePage() {
//   const keyPhrase = 'exampleKeyPhrase'; // Replace with actual key phrase

//   return (
//     <div>
//       <ImageDisplay keyPhrase={keyPhrase} />
//     </div>
//   );
// }

export default function NextJsCarousel() {

    const imageFolder = './public/images'
    
    const[images,setImages] = useState([])

    //setImages(imagess)
    // useEffect(() => {
    //     const fetchImages = async () => {
    //       try {
    //         const response = await fetch('http://localhost:3000/people/images/all');
    //         const imageData = await response.json();
    //         setImages(imageData);
    //       } catch (error) {
    //         console.error('Error fetching images:', error);
    //       }
    //     };
    
    //     fetchImages();
    //   }, [])
  let keyPhrase = 'Show me my grandchild'; // Replace with actual key phrase






        return(
          
          
            <div> 
                <div>
        <ImageDisplay keyPhrase={keyPhrase} />
          </div>
              <div className='w-full bg-amber-200 text-white'>
                <div className='pt-5 h-40 w-30 flex justify-center text-white-100'>
                <button type="button" className='flex justify-center pt-5 rounded-full w-20 h-20 border border-gray-800 bg-black decoration-white'>Speak</button>
                </div>
                
                </div> 
              <Carousel> 
                {images.map((image,index)=>{
                    <div key={index}>
                        <img src={`/images/${image}`} alt={`image${index+1}`}/>
                        <p className='legend'>{`Image ${index+1}`}</p>

                        
                    </div>
                })}
              </Carousel> 
            </div>

        )
    }


// export async function getServerSideProps(){
//     try{
//         const response = await fetch('/images/all');
//         const images = await response.json();

//         return{
//             props: {images},
//         }
//     }catch(error){
//         console.error("error fetching images", error);
//         return{
//             props: {images: []},
//         };
//     }
// }

