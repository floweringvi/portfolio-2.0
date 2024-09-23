import React from "react";

import photo from "../assets/images/images.portfolio.png";

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCalendarCheck} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const element = <FontAwesomeIcon icon={faCode} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
const github = <FontAwesomeIcon icon={faSquareGithub} />;
const calendar = <FontAwesomeIcon icon={faCalendarCheck} />;

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              alt={"Avater Likeness as Placeholder"}
              src={photo}
              className="about-img"
            ></img>
            <div className="square" id="circle-one">
              <ul className=" gowun-batang-regular about-body first-bubble">
                <li>
                  <i>{element}</i> A budding developer who works on all aspects
                  of the FullStack.
                </li>
                <li>
                  <i>{element}</i> Proficient in a wide range of programming
                  languages
                </li>
                <li>
                  <i>{element}</i> Holding a passionate interest in backend
                  technologies and data structures
                </li>
                <li>
                  <i>{element}</i> Previously taken charge of Model
                  generation, API requests and more
                </li>
              </ul>
            </div>
          </div>
          <div className="col order-1">
            <div className="gowun-batang-regular">
              <a
              href="/contact"
              role="button"
              className="mini-hero"
              >
                <p>Need a website? Contact me today for an appointment <i>{calendar}</i></p>
                </a>
            </div>
          
            <div className="square" id="circle-two">
              <ul className="gowun-batang-regular about-body all-text">
                <li>
                  <i>{element}</i> HTML
                </li>
                <li>
                  <i>{element}</i> CSS
                </li>
                <li>
                  <i>{element}</i> Bootstrap
                </li>
                <li>
                  <i>{element}</i> Javascript
                </li>
                <li>
                  <i>{element}</i> JQUERY
                </li>
                <li>
                  <i>{element}</i> Handlebars
                </li>
                <li>
                  <i>{element}</i> Sequelize
                </li>
                <li>
                  <i>{element}</i> REACT
                </li>
                <li>
                  <i>{element}</i> MongoDb
                </li>
                <li>
                    <i>{element}</i> and More!
                </li>
              </ul>
            </div>
           
            <div className="square" id="circle-three">
              <p className="gowun-batang-regular about-body all-text">
                Project experience includes:
                <ul className="about-body gowun-batang-regular">
                  <li>
                    <i>{element}</i> Generic Blogging applications
                  </li>
                  <li>
                    <i>{element}</i> Recipe generator: Dad Dinner
                  </li>
                  <li>
                    <i>{element}</i> An Ethical travel website: Greentrail
                  </li>
                  <li>
                    <i>{element}</i> Crafting Website: Craft Corner
                  </li>
                  <li>
                    <i>{element}</i> This Portfolio!
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
