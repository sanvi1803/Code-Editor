import { FaCodepen } from "react-icons/fa";
import styled from 'styled-components';
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function HomePage() {
    const navigate = useNavigate();
    // Logout handler function
    const handleLogout = async () => {
        try {
            // Send a request to the logout endpoint
            await axios.post('http://localhost:8000/logout', {}, {
                withCredentials: true,  // Ensure cookies are included
            });

            // Redirect to login page
            navigate('/login');
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    }
    return (
        <Container>
            <FaCodepen className='text-white text-3xl z-10 fixed mt-5 ml-[120px]' />
            <button
                onClick={handleLogout}
                className='text-zinc-900 bg-[#ecf15ead] border-2 border-black hover:bg-transparent hover:text-white transition-all ease-linear hover:border-2 hover:border-zinc-400 px-2 py-1 rounded-md z-10 absolute right-5 top-6' >Logout</button>
            <div className='flex items-center gap-4  w-full bg-[#151517] text-white px'>
                <LeftSide />
                <RightSide />

            </div>
        </Container>
    )
}

export default HomePage
const Container = styled.div`
    max-height: 100vh;
`
