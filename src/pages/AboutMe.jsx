import React from 'react';

import photo from '../assets/images.portfolio.png'

export default function Home() {
    return (
        <div>
            <h1>This is Violet Stanziani</h1>
            <img alt ={'Avater Likeness as Placeholder'}
            src= {photo}></img>
            <p className ='text-center'>
                Violet Stanziani is a budding developer who enjoys working on all aspects of the Full Stack. Proficient in HTML, CSS, Bootstrap, Javascript, 
                JQUERY, Handlebars, Sequelize and MongoDB, she's created web applications ranging from blogging website's and recipe generators to an ethical
                travel website that promotes small local business first. She does however, hold a passionate interest in all things backend, enjoying technologies
                like Handlebars, JQuery, Sequelize and MongoDB.
            </p>
        </div>
    );
}