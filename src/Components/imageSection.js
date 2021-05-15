import React from 'react';
import about from '../img/about.jpg';
import {Link} from 'react-router-dom';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="aboutInfo">
                <h4>I am<span> Michael Pavich</span></h4>
                <p className="aboutText">
                    I am currently working on getting my Bachelor's degree in computer science from the University of
                    West Georgia. I enjoy solving challenging problems and love pushing myself to constantly learn new
                    things. Outside of development and web design, I love nature and motorsports. I try to go hiking as
                    often as I can with my dog to stay in shape. I enjoy watching all kinds of motorsports, such as
                    Formula 1!
                </p>
                <div className="aboutDetails">
                    <div className="leftSection">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Location</p>
                    </div>
                    <div className="rightSection">
                        <p>: Michael Pavich</p>
                        <p>: 22</p>
                        <p>: Villa Rica, Georgia</p>
                    </div>
                </div>
                <Link to="./resource/MichaelPavichResume.docx" target="_blank" download>
                    <button className="btn">Download Resume</button>
                </Link>
            </div>
        </div>
    )
}

export default ImageSection;