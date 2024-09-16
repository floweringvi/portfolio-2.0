import React from 'react';

import HeroI from '../assets/images/heroimage.png'

const Hero =() => {
    return(
        <div className="hero">
        <img
          src={HeroI}
          alt="Image of code from craft corner"
          className="hero-image"
        />
        <div className="hero-content">
          <p id="hero-sub" className="handjet hero-font" >Full-Stack Development</p>
          <div>
            <h1 role="button" href="/" className="handjet hero-font" id="hero-title">
              Violet Stanziani
            </h1>
          </div>
        </div>
      </div>
    )
}
export default Hero;