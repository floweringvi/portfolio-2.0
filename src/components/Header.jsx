import React from 'react';

export default function Header(){
    return(
        <header>
            <div>
                <a
                className="display-4 mb-0 handjet text-decoration-none"
                style={{
                  backgroundColor: "var(--background-color)",
                  color: "var(--text-color)",
                }}
                href="/"
                role="button"
                >
                    Violet Stanziani
                </a>
                
            </div>
            <div>
                <a
                className="borders text-decoration-none"
                href="/projects"
                role="button"
                >
                    Projects
                </a>
                <a
                className="borders text-decoration-none"
                href="/resume"
                role="button"
                >
                    Resume
                </a>
                <a
                className="borders text-decoration-none"
                href="/contact"
                role="button"
                >
                    Contact Me
                </a>
            </div>
        </header>
    )
}