import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
const Contact = () => {
    const handleScrollTo = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <Box id="contact">
            <div className="flex gap-4 items-center justify-center">
                <Link to="https://github.com/sanvi1803"><FaGithub className='text-2xl ' /></Link>
                <Link to="https://www.linkedin.com/in/sanvi-singh-cse/"><FaLinkedin className='text-2xl ' /></Link>
                <Link to="mailto:sanvis0184@gmail.com"><CiMail className='text-2xl ' /></Link>
            </div>
            <ul className="flex gap-4 items-center justify-center pt-4 text-lg">
                <li onClick={() => handleScrollTo('code-editor')} className='cursor-pointer'>CodeForge</li>
                <li onClick={() => handleScrollTo('codepen')} className='cursor-pointer'>CodePen</li>
                <li onClick={() => handleScrollTo('contact')} className='cursor-pointer'>Contact</li>
            </ul>
            <h3 className="text-sm mt-3  p-3 flex items-end justify-center"><span className="text-zinc-400 ">Designed with 💛 by</span> &nbsp; Shruti</h3>
        </Box>
    )
}

export default Contact
const Box = styled.div`
    height: 30vh;
    background-color: black;
    color: white;
    border-top: 2px dashed #27272a ;
    background-image: radial-gradient(#afaaaa36 1px,transparent 1px);
    background-size: 60px 60px;
    padding:3rem;
`