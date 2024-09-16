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
          <p id="hero-borders">Full-Stack Development</p>
          <div>
            <h1 role="button" href="/">
              Violet Stanziani
            </h1>
          </div>
        </div>
      </div>
    )
}
export default Hero;