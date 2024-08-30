/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import styled from 'styled-components'
import { FaCodepen } from "react-icons/fa";
import Input from './Input';
import Gradient from './Gradient';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
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
      const response = await axios.post('http://localhost:8000/login', formData, { withCredentials: true });
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
  return (
    <div className='bg-black h-[100vh] text-white'>
      <FaCodepen className='text-white text-3xl z-10 fixed mt-5 ml-[100px]' />
      <Gradient ></Gradient>
      <div>

        <Box className='flex flex-col justify-center h-[100vh] w-[40%] m-auto'>
          <Head>Login to Codik</Head>
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
            <h3 className='text-xs m-auto'>Don't have an account? <Link to="/register" className='text-[#ecf15ec3]'>SignUp</Link></h3>
          </form>
        </Box>
      </div >
    </div>
  )
}

export default Login





const Box = styled.div`
`
const Head = styled.h1`
  font-size:2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`

