import React from 'react';
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 import {faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons'

 const linkedIn = <FontAwesomeIcon icon={faLinkedin}/>
 const github = <FontAwesomeIcon icon={faSquareGithub}/>

 export default function Assetbuttons(){
    return(
        <div>
            <a className="borders  asset-btn text-decoration-none invert-button" href="https://www.linkedin.com/in/violet-stanziani-a82196297"> <i>{linkedIn}</i></a>
           <a className="borders asset-btn text-decoration-none invert-button" href="https://github.com/floweringvi"><i>{github}</i></a>
        </div>
    )
 }