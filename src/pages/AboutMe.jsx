import React from 'react';

import photo from '../assets/images/images.portfolio.png'



// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons'

const element = <FontAwesomeIcon icon={faCode} />
const linkedIn = <FontAwesomeIcon icon={faLinkedin}/>
const github = <FontAwesomeIcon icon={faSquareGithub} />







export default function Home() {
    return (
       
       
        <div >
            
           
            <div className="container">
            <div className="row">
                <div className="col">
           
            <img alt ={'Avater Likeness as Placeholder'}
            src= {photo} className="about-img"></img>
            </div>
            <div className="col order-1">
            <p className=" gowun-batang-regular about-body">
                Violet Stanziani is a budding developer who enjoys working on all aspects of the Full-Stack. Proficient in a wide range of programming languages, including but not limited to: 
                </p>
                <ul className="gowun-batang-regular">
                    <li><i>{element}</i> HTML</li>
                    <li><i>{element}</i> CSS</li>
                    <li><i>{element}</i> Bootstrap</li>
                    <li><i>{element}</i> Javascript</li>
                    <li><i>{element}</i> JQUERY</li>
                    <li><i>{element}</i> Handlebars</li>
                    <li><i>{element}</i> Sequelize</li>
                    <li><i>{element}</i> REACT</li>
                    <li><i>{element}</i> and MongoDb</li>
                    </ul> 
                    <p className="gowun-batang-regular about-body">
                     She has created web applications ranging from blogging applications and recipe generators to an ethical
                travel website that promotes small local business first and a crafting site that saves and logs crafts a user may be interested in. She holds a passionate interest in backend technologies and data structures, taking charge of things like model generation, seeding and API requests.  
                </p>
            
            </div>
            </div>
            </div>
        </div>
        
    );
}