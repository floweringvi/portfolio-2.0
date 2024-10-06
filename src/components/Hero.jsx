import React from 'react';

import HeroI from '../assets/images/heroimage.png'
import SVG from '../assets/images/SVG-Test.png'
import Ecomm from '../assets/images/e-commerce.png'
import Fetch from '../assets/images/dadDinnerFetch.png'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero =() => {
    return(
      <Carousel swipeable={true} showThumbs={false} autoPlay={true} transitionTime={500}>
        <div className="hero" >
        <img
          src={HeroI}
          alt="Image of code from craft corner"
          className="hero-image-start"
        />
        <div className="hero-content">
          <p id="hero-sub" className="handjet hero-font" >Full-Stack Development</p>
          <div>
            <h1 className="handjet hero-font" id="hero-title">
              Violet Stanziani
            </h1>
          </div>
        </div>
      </div>
      <div className="hero">
        <img
        src={SVG}
        alt=""
        className="hero-image"
        />
        

      </div>
      <div className="hero">
        <img
        src={Ecomm}
        alt=""
        className="hero-image"
        />

      </div>
      <div className="hero">
        <img
        src={Fetch}
        className="hero-image"
        />
        
      </div>
      </Carousel>
    )
}
export default Hero;