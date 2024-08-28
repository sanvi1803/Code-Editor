import styled from 'styled-components'
import { useEffect } from 'react';
import AnimatePara from './AnimatePara'
function LeftSide() {
    useEffect(() => {
        AnimatePara(); // Trigger the animation when the component mounts
    }, []);
    return (

        <Content className='flex  flex-col h-[100vh] w-[100%] items-center justify-center bg-cover bg-center ' >
            <Para className='para'>
                Code. <br></br>
                Edit.<br></br>
                Experience.
            </Para>
        </Content >

    )
}

export default LeftSide
const Para = styled.p`
    font-size: 6rem;
    font-weight: 700;
    z-index: 1;
    /* color: #eeececf1; */
    /* text-shadow:5px 5px 8px rgba(15, 14, 14, 0.163); */
    -webkit-text-stroke: 2px #c4c4c4c2;
    color:transparent;
    /* animation: slideIn 3s ease-out forwards;
    opacity: 0; */

    /* @keyframes slideIn {
        0% {
            transform: translateY(-50px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    } */
`

const Content = styled.div`
    background-image: url("https://images.unsplash.com/photo-1520583457224-aee11bad5112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZGUlMjBkYXJrfGVufDB8fDB8fHww");
    position: relative;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
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