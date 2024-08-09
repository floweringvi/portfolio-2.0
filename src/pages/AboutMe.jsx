import React from 'react';

import photo from '../assets/images.portfolio.png'



const header={
    color: "black",
    textAlign:"justify",
    padding:"15px",
    fontFamily:"Serif"
}
const para ={
    color: "black",
    textAlign:"justify",
    padding:"15px",
    fontFamily:"Serif",
    fontSize:"20px"
}
const photostyle ={
    display:"flex",
    marginLeft:"10px",
    borderRadius:"10px",
    boxShadow:"4px 2px 3px 4px rgba(12,12,12,0,2)",
    padding:"15px",
    
}

export default function Home() {
    return (
        <div >
            <h1 style={header}>This is Violet Stanziani</h1>
            <img style={photostyle} alt ={'Avater Likeness as Placeholder'}
            src= {photo}></img>
            <p style={para} >
                Violet Stanziani is a budding developer who enjoys working on all aspects of the Full Stack. Proficient in:
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>JQUERY</li>
                    <li>Handlebars</li>
                    <li>Sequelize</li>
                    <li>and MongoDb</li>
                    </ul> 
                     She has created web applications ranging from blogging website's and recipe generators to an ethical
                travel website that promotes small local business first. She does however, hold a passionate interest in all things backend, striving to enhance her skills everyday.
               
            </p>
        </div>
    );
}