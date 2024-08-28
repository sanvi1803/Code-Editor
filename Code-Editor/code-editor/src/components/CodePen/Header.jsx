import { FaCodepen } from "react-icons/fa";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <Head className='flex bg-red-200 items-center justify-between'>

            <Link to="/"><FaCodepen className='text-white text-3xl z-10 ml-[80px] static' /></Link>

            <button className='bg-black text-white px-2 py-1 rounded-md mr-4 border border-gray-400 hover:bg-white hover:text-black duration-200'>
                <Link to="/code-editor">Code Editor</Link>
            </button>
        </Head>
    )
}

export default Header
const Head = styled.div`
    background-color: black;
    width: 100%;
    height: 9vh;
    padding-top: 15px;
`