/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import { FaCodepen } from "react-icons/fa";
import Input from './Input';
import Gradient from './Gradient';
import { Link } from "react-router-dom"
function Login() {

  return (
    <div className='bg-black h-[100vh] text-white'>
      <FaCodepen className='text-white text-3xl z-10 fixed mt-5 ml-[100px]' />
      <Gradient ></Gradient>
      <div>

        <Box className='flex flex-col justify-center h-[100vh] w-[40%] m-auto'>
          <Head>Login to Codik</Head>
          <form className='bg-[#ffffff10] px-5 py-10 rounded-lg flex flex-col gap-3 backdrop-blur-md'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='text-[16px]'>Email</label>
              <Input type="email" placeholder='Email' name='email' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='text-[16px]'>Password</label>
              <Input className="p-2" type="password" placeholder='Password' name='password' />
            </div>
            <input type="submit" placeholder='Name' className='bg-[#ECF15E] cursor-pointer py-2 rounded-md w-[100%] text-black mt-2' value="Login" />
            <h3 className='text-sm m-auto'>Don't have an account? <Link to="/register" className='text-[#ecf15ec3]'>SignUp</Link></h3>
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

