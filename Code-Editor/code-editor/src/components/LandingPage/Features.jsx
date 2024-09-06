/* eslint-disable react/no-unescaped-entities */
import { Container } from "./Container"
import styled from "styled-components"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
    useEffect(() => {
        // Animate all images with GSAP
        gsap.fromTo(".image",
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".image", // Trigger the animation when the image comes into view
                    start: "top 80%",  // Animation starts when the top of the image hits 80% of the viewport
                    end: "bottom 20%", // Animation ends when the bottom of the image hits 20% of the viewport
                    toggleActions: "play reverse play reverse", // Play the animation once and don't reverse
                    markers: false // Set to true if you want to see debugging markers
                }
            }

        );

        gsap.to(".gradient2", {
            y: "-=60",
            x: "+=40",
            duration: 2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            skewX: 8,
        });
    }, []);
    return (
        <Container className="flex flex-col items-center relative border-t-[1px] border-dashed border-zinc-800">

            <Gradient className='gradient2'></Gradient>
            <Head className="tracking-tight mt-8">What makes Codik so special?</Head>
            <h3 className="text-zinc-500 pt-3">There are plenty of benefits when using Codik. We tried to list some of them out.</h3>
            <Box>
                <BoxItem>
                    <Img className="image" src="https://framerusercontent.com/images/XKsSRisjyWkvcN3cBsPDsC1p1g.svg" alt="" />
                    <BoxHead>Save time & resources</BoxHead>
                    <Para>You don't have to spend thousands of dollars to get a easy code editor.</Para>
                </BoxItem>
                <BoxItem>
                    <Img className="image" src="https://framerusercontent.com/images/3WThI6FskrUcA9a0RnJhc5Qw.svg" alt="" />
                    <BoxHead>Easy to customize</BoxHead>
                    <Para>With easy customization, users can seamlessly save their code, run it by providing input, and get the desired output, all while having the flexibility to adapt the editor to their needs.</Para>
                </BoxItem>
                <BoxItem>
                    <Img className="image" src="https://framerusercontent.com/images/FxFFbbl04OmSd218VcqU1eQStj8.svg" alt="" />
                    <BoxHead>Clean & organized</BoxHead>
                    <Para>Messy code? Not here! Our editor keeps things cleaner than your laundry pile (well, most days)!</Para>
                </BoxItem>

            </Box>
        </Container>
    )
}

export default Features
const Head = styled.h1`
    font-size: 50px;
    font-weight: 500;
    margin-top: 5rem;
`
const Box = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    width: 80%;
    margin-top: 7rem;
    justify-content: center;

`
const BoxItem = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 2rem; */
    align-items: center;
    text-align: center;
    justify-content: end;
    gap: 10px;
    width: 50%;
`

const Img = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
`

const BoxHead = styled.h2`
    font-size: 20px;
`
const Para = styled.p`
    font-size: 14px;
    color: gray;
    letter-spacing: -0.025rem;
`
const Gradient = styled.div`
  height:80vh;
  width:90vh;
  background-color: #e0e46095;
  border-radius: 50%;
  z-index: 10;
  /* margin: auto; */
  position: absolute;
  bottom: -20rem;
  left: -20rem;
  /* bottom: -10px; */
  transform: translate(-50%,-50%);
  filter: blur(200px);
`