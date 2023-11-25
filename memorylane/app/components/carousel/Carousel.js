'use client'

import {Swiper, SwiperSlide} from "swiper/react"
import {EffectCoverflow} from "swiper";
import React, { createContext } from 'react';

import "swiper/css"
import "./styles.css"
import "swiper/css/effect-coverflow";

const slides=[
    "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg",
  "https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg",
  "https://i.postimg.cc/8cfgmQYD/campbell-3-ZUs-NJhi-Ik-unsplash.jpg",
  "https://i.postimg.cc/8Ck5BcmS/evgeny-tchebotarev-aiwu-Lj-LPFn-U-unsplash.jpg",
  "https://i.postimg.cc/66F8J9tr/hakon-sataoen-qyfco1nf-Mtg-unsplash.jpg",
  "https://i.postimg.cc/ydbzRYvv/joey-banks-YApi-Wyp0lqo-unsplash.jpg",
  "https://i.postimg.cc/NGKKzyqG/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg",
  "https://i.postimg.cc/JhK81QJw/marcus-p-o-UBjd22g-F6w-unsplash.jpg",

]

export const Carousel=()=>{
    return(
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item">
    <img src="1.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="2.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="3.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="4.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="5.png" className="rounded-box" />
  </div> 
  
</div>
       
    )
}

export default Carousel;