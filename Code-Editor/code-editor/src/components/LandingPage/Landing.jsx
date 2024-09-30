// import React from 'react'
import { Container } from "./Container";
import AnimatePara from '../HomePage/AnimatePara'
import { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar";
import gsap from "gsap";
const Landing = () => {
    useEffect(() => {
        AnimatePara(); // Trigger the animation when the component mounts
    }, []);
    useEffect(() => {
        gsap.to(".gradient2", {
            y: "-=40", // Move 50px upwards
            x: "+=10", // Move 20px to the right for a diagonal effect
            duration: 2, // Duration of one cycle
            ease: "power1.inOut", // Smooth in and out motion
            yoyo: true, // Make the animation go back and forth
            repeat: -1, // Repeat indefinitely
            skewX: 8, // Skew the element by 10 degrees on the X-axis
        });
    }, []);
    return (
        <Container >
            <Gradient className="gradient2" />
            <Navbar />
            <div className='flex items-center gap-4 w-full text-white pt-28 px-[80px]'>
                <Content>
                    <Para className='para'>
                        Code. <br></br>
                        Edit.<br></br>
                        Experience.
                    </Para>
                </Content >
               
            </div>
        </Container>
    )
}

export default Landing
const Para = styled.p`
    font-size:9rem;
    font-weight: 700;
    z-index: 1;
    padding-left:2rem;
    line-height: 8rem;
    -webkit-text-stroke: 2px #c4c4c4c2;
    color:transparent;
`

const Content = styled.div`
    /* background-image: url("https://images.unsplash.com/photo-1520583457224-aee11bad5112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZGUlMjBkYXJrfGVufDB8fDB8fHww"); */
    position: relative;
    background-size: cover;
    background-position: center;
    /* height: 100vh; */
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: inherit;
        background-size: inherit;
        background-position: inherit;
        filter: blur(5px); /* Adjust the blur intensity */
        /* z-index: -1;  */
    }
`
const Gradient = styled.div`
  height:80vh;
  width:90vh;
  background-color: #ECF15E;
  border-radius: 50%;
  z-index: 10;
  margin: auto;
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%,-50%);
  filter: blur(200px);
`