import React from 'react';





import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import dadDinner from '../assets/images/dad-dinner.png'
import greentrail from '../assets/images/greentrail.png'
import craftCorner from '../assets/images/Craft-Corner.png'




export default function Portfolio(){
    return (
        <Carousel swipeable={true} stopOnHover={true} autoPlay={true} transitionTime={500} className="carousel">
           <div className="carousel-text gowun-batang-regular">
            <img alt={'image of dad dinner homepage'} src={dadDinner} className="carousel-img" ></img>
            <p >Dad Dinner is a website for the busy parent in your life, they have a million things to do and figuring out what to have for dinner shouldn't be one of them. Search for a specific main ingreidient or randomzie for some fun. Working on this project put JavaScript skills to test, fetching from various API's, manipulating JSON and building responsive results pages.</p>
           </div>
           <div>
            <img alt={'image of greentrail homepage'} src={greentrail} className="carousel-img"></img>
            <p >Travel Greentrail! Greentrail is an ethical travel website, highlighting the local businesses over big business. Local communities are highlighted, and their community pages feature everything from accomidations, local food spots,to natural wonders and more. This project veered from the traditional HTML, using Handlebars for the diplay componenets. The data models featured a hierarchical interconnected SQL data structure, that was rewarding to work with, especially when it came time to write the necessary GET requests. An article I wrote on Medium talks about this specific topic, <a href={'https://medium.com/@stanzianiviolet/model-interconnectivity-912e55605bff'} className="article-a">here.</a>  Greentrial is currently preparing for it's v2 launch, featuring REACT. </p>
           </div>
           <div>
            <img alt={'image of the craft corner homepage'} src={craftCorner} className="carousel-img"></img>
            <p >Craft Corner is a crafting website made for crafters of any level. Take a survey when you sign up based on interests and price-point to have a few recommended crafts in your dashboard. Naviagte the site by crafting category and heart whatever you might want to work on later, adding it to your dashboard! This site featured dynamic REACT components and a graphQL backend.</p>
           </div>
   
        </Carousel>
    /* // <div>
       
    //     <img alt={'image of dad dinner homepage'} src={dadDinner} ></img>
    //    <h2><a href={'https://adammathis05.github.io/dad-dinner/'}>Dad Dinner</a></h2>
    //    <p >Dad Dinner is a website for the busy parent in your life, they have got a million things to do and figuring out what to have for dinner shouldn't be one of them. 
    //     Search for a specific main ingredient or randomize for some fun. Take the stress out of a family meal.
    //    </p>
    //    <img alt={'image of the greentrail homepage'} src={greentrail} className="portfolio-images" ></img>
    //    <h2><a href={'https://greentrail.onrender.com/'}>Greentrail</a></h2>
    //    <p >Travel Ethically! Greentrail is an ethical travel website, highlighting the local businesses over big business. Local communities are highlighted, featuring accomidations, local food spots, nature destinations and other ammenities</p>
    // </div>  */
)
}