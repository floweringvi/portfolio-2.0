import React from 'react';



const Hero =() => {
    return(
        <div className="hero">
        <img
          src={"../assets/images/heroimage.png"}
          alt="Image of code from craft corner"
          className="hero-image"
        />
        <div className="hero-content">
          <p id="explore-feature">Full-Stack Development</p>
          <div className="single-craft">
            <h1 id="single-craft" role="button">
              Violet Stanziani
            </h1>
          </div>
        </div>
      </div>
    )
}
export default Hero;