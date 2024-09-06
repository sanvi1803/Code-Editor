// import React from 'react'
import CodeForge1 from "./CodeForge1";
import CodeForge2 from "./CodeForge2";
import CodePen1 from "./CodePen1";
import CodePen2 from "./CodePen2";
import Contact from "./Contact";
import Features from "./Features";
import Landing from "./Landing";
import { ReactLenis } from "lenis/react"
import "./App.css"
// import Hero from "./hero";

const LandingPage = () => {

    return (
        <>
            <ReactLenis root>
                <Landing />
                <CodeForge1 />
                <CodeForge2 />
                <CodePen1 />
                <CodePen2 />
                <Features />
                <Contact />
                
            </ReactLenis>
        </>
    )
}

export default LandingPage

