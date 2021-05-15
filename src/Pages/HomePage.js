import React from 'react';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="heroText">
                    Welcome, I am
                    <span> Michael Pavich</span>
                </h1>
                <p className="homeSubText">
                    I am a computer science student and lover of nature and motorsports. Currently, I am working on my
                    Bachelor's in computer science at the University of West Georgia.
                </p>
                <div className="icons">
                    <a className="iconLink" href="https://github.com/mpavich2" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </a>
                    <a className="iconLink" href="https://www.linkedin.com/in/michael-pavich-a4bb5a20a" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;