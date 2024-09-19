import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub} from '@fortawesome/free-brands-svg-icons'
const github = <FontAwesomeIcon icon={faSquareGithub} />

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import dadDinner from '../assets/images/dad-dinner.png'
import greentrail from '../assets/images/greentrail.png'
import craftCorner from '../assets/images/Craft-Corner.png'




export default function Portfolio(){
    return (
        <Carousel swipeable={true} showThumbs={false} stopOnHover={true} autoPlay={true} transitionTime={500} className="carousel">
           <div className="gowun-batang-regular">
            <img alt={'image of dad dinner homepage'} src={dadDinner} className="carousel-img" ></img>
            <a className="borders handjet text-decoration-none invert-button carousel-ref" href="https://adammathis05.github.io/dad-dinner/" role="button"> Deployment</a>
            <a className="borders handjet text-decoration-none invert-button carousel-ref" href="https://github.com/adammathis05/dad-dinner"><i>{github}</i> Repository</a>
            <p >Dad Dinner is a website for the busy parent in your life, they have a million things to do and figuring out what to have for dinner shouldn't be one of them. Search for a specific main ingreidient or randomzie for some fun. Working on this project put JavaScript skills to test, fetching from various API's, manipulating JSON and building responsive results pages.</p>
           
           </div>
           <div className="gowun-batang-regular">
            <img alt={'image of greentrail homepage'} src={greentrail} className="carousel-img"></img>
            <a className="borders handjet text-decoration-none invert-button carousel-ref" href="https://github.com/Crestone-Tech/greentrail-original"><i>{github}</i> Repository</a>
            <p >Travel Greentrail! Greentrail is an ethical travel website, highlighting the local businesses over big business. Local communities are highlighted, and their community pages feature everything from accomidations, local food spots,to natural wonders and more. This project veered from the traditional HTML, using Handlebars for the diplay componenets. The data models featured a hierarchical interconnected SQL data structure, that was rewarding to work with, especially when it came time to write the necessary GET requests. An article I wrote on Medium talks about this specific topic, <a href={'https://medium.com/@stanzianiviolet/model-interconnectivity-912e55605bff'} className="article-a">here.</a>  Greentrial is currently preparing for it's v2 launch, featuring REACT. </p>
            
           </div>
           <div className="gowun-batang-regular">
            <img alt={'image of the craft corner homepage'} src={craftCorner} className="carousel-img"></img>
            <a className="borders handjet text-decoration-none invert-button carousel-ref" href="https://craft-corner.onrender.com">Deployment</a>
            <a className="borders handjet text-decoration-none invert-button carousel-ref" href="https://github.com/kaitlynmooney/craft-corner"><i>{github}</i> Repository</a>
            <p >Craft Corner is a crafting website made for crafters of any level. Take a survey when you sign up based on interests and price-point to have a few recommended crafts in your dashboard. Naviagte the site by crafting category and heart whatever you might want to work on later, adding it to your dashboard! This site featured dynamic REACT components and a graphQL backend.</p>
            
           </div>
   
        </Carousel>
   
)
}