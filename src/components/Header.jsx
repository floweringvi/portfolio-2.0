import React from 'react';
import Resume from '../assets/violetstanziani-resume.pdf'

export default function Header(){
    return(
        <header>
            <div>
                <a
                className="display-4 mb-0 handjet text-decoration-none title"
                style={{
                  backgroundColor: "var(--background-color)",
                  color: "var(--text-color)",
                }}
                href="/"
                role="button"
                >
                    Violet Stanziani Tech
                </a>
                
            </div>
            <div>
                <a
                className="borders handjet text-decoration-none invert-button"
                href="/projects"
                role="button"
                >
                    Projects
                </a>
                <a
                className="borders handjet text-decoration-none invert-button"
                href={Resume}
                download="VioletStanzianiResume"
                role="button"
                >
                   Download My Resume
                </a>
                <a
                className="borders handjet text-decoration-none invert-button"
                href="/contact"
                role="button"
                >
                    Contact Me
                </a>
            </div>
        </header>
    )
}