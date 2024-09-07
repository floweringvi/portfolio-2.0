import React from 'react';

import photo from '../assets/images/images.portfolio.png'





export default function Home() {
    return (
        <div >
            <h1>This is Violet Stanziani</h1>
            <img alt ={'Avater Likeness as Placeholder'}
            src= {photo}></img>
            <p>
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