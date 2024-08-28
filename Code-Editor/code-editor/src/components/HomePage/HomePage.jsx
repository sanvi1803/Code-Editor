import { FaCodepen } from "react-icons/fa";
import styled from 'styled-components';
import LeftSide from './LeftSide'
import RightSide from './RightSide'
function HomePage() {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     // Simulate loading time (e.g., fetching data or other async tasks)
    //     const timer = setTimeout(() => {
    //         setLoading(false);  // Set loading to false after the simulated delay
    //     }, 2000);  // 2 seconds delay (adjust as needed)

    //     return () => clearTimeout(timer);  // Cleanup the timer on component unmount
    // }, []);

    // if (loading) {
    //     return <Loader />;  // Show loader while loading
    // }
    return (
        <Container>
            <FaCodepen className='text-white text-3xl z-10 fixed mt-5 ml-[120px]' />
            <div className='flex items-center gap-4 bg-[#] w-full bg-[#151517] text-white px'>
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
