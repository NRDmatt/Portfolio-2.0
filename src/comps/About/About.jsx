import React from 'react';
import "./About.scss"
import { useEffect, useRef } from 'react';
import { init } from 'ityped'

function About() {
    const textRef = useRef();


    useEffect (()=>{
       init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["marketer", "coding master", "full stack developer", "Texan"],  
       });


    }, []);


    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/profile pic.jpg" alt="mathew wyatt pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Howdy there, I'm</h2>
                    <h1>Mathew Wyatt</h1>
                    <h3>Open source <span ref={textRef}></span></h3>
                    <p>Having recently graduated from the full stack web developer boot camp at the university of austin I am equipped with the needed skills to compete and excell in any project or task you may need help with! Explore my portfolio to see some of my work in action!
                    </p>
                </div>
            </div>
        </div>
    );
}


export default About;