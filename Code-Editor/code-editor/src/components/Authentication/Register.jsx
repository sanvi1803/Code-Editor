/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaCodepen } from "react-icons/fa";
import Input from './Input';
import Gradient from './Gradient';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import gsap from 'gsap';
import { BASE_URL } from "../../config/helper"
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState("")
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/register`, formData);
      console.log('Registration successful:', response.data);
      // Handle successful registration (e.g., redirect, show a message)
      navigate("/login")
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      setTimeout(() => {
        setError("");
      }, 3000);
      // Handle registration failure (e.g., display error message)
    }
  };


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
    <div className='bg-black h-[100vh] text-white'>
      <FaCodepen className='text-white text-3xl z-10 fixed mt-5 ml-[100px]' />
      <Gradient className='gradient2'></Gradient>
      <div>

        <Box className='flex flex-col justify-center h-[100vh] w-[40%] m-auto'>
          <Head>Register to <Para>Codik</Para></Head>
          <form
            className='bg-[#ffffff10] px-5 py-10 rounded-lg flex flex-col gap-3 backdrop-blur-md'
            method='post'
            onSubmit={handleSubmit}>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='text-[16px]'>Name</label>
              <Input
                type="text"
                placeholder='Name'
                name='name'
                value={formData.name}
                onChange={handleChange} />
            </div>
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
            <input type="submit" placeholder='Name' className='bg-[#ecf15ed7] cursor-pointer py-2 rounded-md w-[100%] text-black mt-2' />
            {error && (
              <p className='text-red-500 text-center mt-2'>{error}</p>
            )}
            <p className='text-xs text-zinc-600'>By creating an account, you agree to the Terms of Service.</p>

            <h3 className='text-sm m-auto'>Already have an account? <Link to="/login" className='text-[#ecf15ec3]'>Login</Link></h3>
          </form>
          <Gradient2 className='absolute left-0 bottom-0 gradient2'></Gradient2>
        </Box>

      </div >
    </div>
  )
}

export default Register

const Box = styled.div`
`
const Head = styled.h1`
  font-size:2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`

const Gradient2 = styled.div`
  height:40vh;
  width:40vh;
  background-color: #ECF15E;
  border-radius: 50%;
  z-index: 10;
  filter: blur(180px);
  /* top:80%; */
  /* bottom: -50%; */
  right: 80%;
  /* transform: translate(-50%,-50%); */
  /*left: -50%; */
`

const Para = styled.p`
    font-size: 6rem;
    font-weight: 700;
    z-index: 1;
    -webkit-text-stroke: 2px #c4c4c4c2;
    color:transparent;
`
