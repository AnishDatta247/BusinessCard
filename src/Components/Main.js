import React from "react";
import maillogo from "./mail.png"
import instalogo from "./instagram.png"

export default function Main(){
    return(
        <main>
            <div className="intro">
                <p className="name">Anish Datta</p>
                <p className="post">Frontend Developer and ML Hobbyist</p>
                <p className="website">anishdatta.website</p>
            </div>

            <div className="social-media">
                <div className="social-box" id="email">
                    <img src={maillogo}/>
                    <p>Email</p>
                </div>

                <div className="social-box" id="insta">
                    <img src={instalogo}/>
                    <p>Instagram</p>
                </div>
            </div>

            <div className="about-container">
                <div className="about-me">
                    <h3>About</h3>
                    <p>I am a student at Indian Institute of Technology, Kharagpur. I enjoy front-end development and am a ML hobbyist. Backend and game development are some of the things in my to-learn list.</p>
                </div>
                <div className="about-me">
                    <h3>Interests</h3>
                    <p>Photography(do check out my Instagram), anime, gaming, and binge-watching netflix are some of my favourite things in life.</p>
                </div>
            </div>
        </main>
    )
}