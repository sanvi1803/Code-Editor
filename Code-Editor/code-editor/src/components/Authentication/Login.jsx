/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import styled from 'styled-components'
// import { FaCodepen } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import Input from './Input';
import Gradient from './Gradient';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import gsap from 'gsap';
import { useUser } from '../../context/UserContext';
import { BASE_URL } from "../../config/helper"
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { setUser } = useUser();

  const [error, setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/login`, formData, { withCredentials: true });
      console.log('Login successful:', response.data);
      setUser(response.data.user);
      console.log(response.data.user);
      // await fetchUser();
      // Redirect to /home after successful login
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      // Handle login failure (e.g., display error message)
      setError(error.response?.data || "Invalid Credentials");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  useEffect(() => {
    gsap.to(".gradient2", {
      y: "-=60", // Move 50px upwards
      x: "+=10", // Move 20px to the right for a diagonal effect
      duration: 2, // Duration of one cycle
      ease: "power1.inOut", // Smooth in and out motion
      yoyo: true, // Make the animation go back and forth
      repeat: -1, // Repeat indefinitely
      skewX: 10, // Skew the element by 10 degrees on the X-axis
    });
  }, []);

  return (
    <div className='bg-black h-[100vh] text-white'>
      <FaLaptopCode className='text-white text-3xl z-10 fixed mt-5 ml-[100px]' />
      <Gradient className='gradient2'></Gradient>
      <div>

        <Box className='flex flex-col justify-center h-[100vh] w-[40%] m-auto'>
          <Head>Login to <Para>Codik</Para></Head>
          <form
            className='bg-[#ffffff10] px-5 py-10 rounded-lg flex flex-col gap-3 backdrop-blur-md'
            onSubmit={handleSubmit}>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='text-[16px]'>Email</label>
              <Input
                type="email"
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='text-[16px]'>Password</label>
              <Input
                className="p-2"
                type="password"
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={handleChange} />
            </div>
            <input type="submit" placeholder='Name' className='bg-[#ECF15E] cursor-pointer py-2 rounded-md w-[100%] text-black mt-2' value="Login" />
            {error && (
              <p className='text-red-500 text-center mt-2'>{error}</p>
            )}
            <h3 className='text-sm m-auto'>Don't have an account? <Link to="/register" className='text-[#ecf15ec3]'>SignUp</Link></h3>
          </form>
          <Gradient2 className='absolute left-0 bottom-0 gradient2'></Gradient2>
        </Box>
      </div >
    </div>
  )
}

export default Login
const Gradient2 = styled.div`
  height:40vh;
  width:40vh;
  background-color: #ECF15E;
  border-radius: 50%;
  z-index: 10;
  filter: blur(180px);
  /* top:95%;*/
  right: 50%;
  /* transform: translate(-50%,-50%);  */
  /*left: -50%; */
`




const Box = styled.div`
`
const Head = styled.h1`
  font-size:3rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`

const Para = styled.p`
    /* font-size: 6rem; */
    font-weight: 700;
    z-index: 1;
    -webkit-text-stroke: 2px #c4c4c4c2;
    color:transparent;
    margin-left: 10px;
`

const head = document.querySelector("h1");
head.addEventListener("click",()=>{
  alert("hey");
})