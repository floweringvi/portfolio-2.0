import React from 'react';

import Form from '../components/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

const wand =<FontAwesomeIcon icon={faWandMagicSparkles}/>;

export default function Contact(){
    return (
        <div>
            <h1 className="contact-header gowun-batang-regular">Contact Me</h1>
            <h2 className="contact-header gowun-batang-regular"> Let Me Bring Your Dream Website to Life <i>{wand}</i></h2>
            <Form />
        </div>
    )
}