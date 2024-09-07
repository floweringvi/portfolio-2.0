import React from 'react';

import dadDinner from '../assets/dad-dinner.png'
import greentrail from '../assets/greentrail.png'


const style = {
    padding: "30px",
    height:"400px",
    width:"500px"
}
const text = {

    textAlign: "center",
    fontFamily:"serif",
    fontSize:"20px"


}
export default function Portfolio(){
    return (
    <div>
        <img alt={'image of dad dinner homepage'} src={dadDinner} style={style}></img>
       <h2><a href={'https://adammathis05.github.io/dad-dinner/'}>Dad Dinner</a></h2>
       <p style={text}>Dad Dinner is a website for the busy parent in your life, they have got a million things to do and figuring out what to have for dinner shouldn't be one of them. 
        Search for a specific main ingredient or randomize for some fun. Take the stress out of a family meal.
       </p>
       <img alt={'image of the greentrail homepage'} src={greentrail} style={style}></img>
       <h2><a href={'https://greentrail.onrender.com/'}>Greentrail</a></h2>
       <p style={text}>Travel Ethically! Greentrail is an ethical travel website, highlighting the local businesses over big business. Local communities are highlighted, featuring accomidations, local food spots, nature destinations and other ammenities</p>
    </div> )
}