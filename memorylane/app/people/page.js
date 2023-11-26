'use client'

import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'

export default class NextJsCarousel extends  Component{
    render(){
        return(
            <div> 
              <div className='w-full bg-amber-200 text-white'>
                <div className='pt-5 h-40 w-30 flex justify-center text-white-100'>
                <button type="button" className='flex justify-center pt-5 rounded-full w-20 h-20 border border-gray-800 bg-black decoration-white'>Speak</button>
                </div>
                
                </div> 
              <Carousel> 
                  <div> 
                      <img src="/1.png" alt="image1"/> 
                      <p className="legend">Image 1</p> 
  
                  </div> 
                  <div> 
                      <img src="/2.png" alt="image2" /> 
                      <p className="legend">Image 2</p> 
  
                  </div> 
                  <div> 
                      <img src="/3.png" alt="image3"/> 
                      <p className="legend">Image 3</p> 
  
                  </div> 
                  <div> 
                      <img src="/4.png" alt="image4"/> 
                      <p className="legend">Image 4</p> 
  
                  </div> 
                  <div> 
                      <img src="/5.png" alt="image5"/> 
                      <p className="legend">Image 5</p> 
  
                  </div> 
              </Carousel> 
            </div>

        )
    }
}
