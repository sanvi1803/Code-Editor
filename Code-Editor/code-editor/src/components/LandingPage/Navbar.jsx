import { Link } from 'react-router-dom'
import { FaCodepen } from "react-icons/fa";
const Navbar = () => {
    const handleScrollTo = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>

            <div className="flex items-center justify-between text-white">
                <ul className="flex gap-4 items-center ml-[160px] mt-[25px] text-zinc-500 text-lg">
                    <FaCodepen className='text-white text-3xl inline-block' />
                    {/* <a href="#code-editor"><li>CodeForge</li></a>
                    <a href="#codepen"><li>CodePen</li></a>
                    <a href="#"><li>Contact</li></a> */}
                    <li onClick={() => handleScrollTo('code-editor')} className='cursor-pointer'>CodeForge</li>
                    <li onClick={() => handleScrollTo('codepen')} className='cursor-pointer'>CodePen</li>
                    <li onClick={() => handleScrollTo('contact')} className='cursor-pointer'>Contact</li>
                </ul>
                <ul className="flex gap-4 items-center mr-[120px] mt-1 ">
                    <button className="border-2 border-zinc-800 p-2 rounded-md hover:bg-[#fefcfcc1] hover:border-transparent hover:text-black duration-300">
                        <Link to="/register">Register</Link>
                    </button>
                    <button className="border-2 border-zinc-800 p-2 rounded-md hover:bg-[#fefcfcc1] hover:border-transparent hover:text-black duration-300">
                        <Link to="/login">Login</Link>
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
