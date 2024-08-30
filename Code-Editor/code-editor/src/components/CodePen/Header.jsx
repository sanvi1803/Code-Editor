import { FaCodepen } from "react-icons/fa";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <Head className='flex bg-red-200 items-center justify-between'>

            <Link to="/home"><FaCodepen className='text-white text-3xl z-10 ml-[80px] static' /></Link>

            <button className='bg-black text-white px-2 py-1 rounded-md mr-4 border border-gray-400 hover:bg-[#dcd4781d] hover:text-[#dcd478] hover:border-transparent duration-200'>
                <Link to="/user/code-editor">Code Editor</Link>
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