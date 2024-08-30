/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import styled from 'styled-components'
import { FaCodepen } from "react-icons/fa";
import Input from './Input';
import Gradient from './Gradient';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

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
      const response = await axios.post('http://localhost:8000/register', formData);
      console.log('Registration successful:', response.data);
      // Handle successful registration (e.g., redirect, show a message)
      navigate("/login")
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      // Handle registration failure (e.g., display error message)
    }
  };
  return (
    <div className='bg-black h-[100vh] text-white'>
      <FaCodepen className='text-white text-3xl z-10 fixed mt-5 ml-[100px]' />
      <Gradient ></Gradient>
      <div>

        <Box className='flex flex-col justify-center h-[100vh] w-[40%] m-auto'>
          <Head>Register to Codik</Head>
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
            <p className='text-xs text-zinc-600'>By creating an account, you agree to the Terms of Service.We'll occasionally send you account-related emails.</p>

            <h3 className='text-sm m-auto'>Already have an account? <Link to="/login" className='text-[#ecf15ec3]'>Login</Link></h3>
          </form>

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

