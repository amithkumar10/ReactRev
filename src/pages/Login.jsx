import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import useAuth from '../context/useAuth';

const Login = () => {

const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      login({ username, role: "admin" });
      navigate("/admin");
    } else if (username === "user" && password === "user123") {
      login({ username, role: "user" });
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

    
  return (
    <div className='flex flex-col md:min-h-[100vh] md:flex-row bg-black justify-center w-screen'>
     <div className='flex flex-col md:flex-row  max-w-5xl w-full items-center justify-between'>
        
        {/* LHS */}
        <div className='mb-8'>
            <div>
             <img src="/LoginImg1.gif" className=' h-30 w-50 md:h-40 md:w-60' alt="LoginImg" />   
            <h1 className=' text-xl  md:text-5xl font-bold'>Hi Amith!</h1>
            <h3 className='hidden  text-sm md:text-lg sm:block'>Login to access your account</h3>
            </div>
        </div>

        {/* RHS*/}
        <div>
            <div>
                <form action="" onSubmit={handleSubmit} className='flex flex-col p-10 md:p-20 rounded-lg border-solid border-1 border-white'>
                    
                <div className='mb-5 text-center'>
                <h2 className='font-bold text-4xl md:text-3xl  cursor-pointer' onClick={window.location.reload}>ReactRev</h2>
                <h2 className='text-balck text-lg md:text-xl font-semibold'>Login</h2>
                </div>   

                <label htmlFor=""  className=' mt-2'>Username:</label>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username' className='border-1 border-gray-300 w-full rounded-md p-1'/>

                <label htmlFor=""  className='mt-2'>Password:</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter password' className='border-1 border-gray-300 rounded-md w-full   p-1'/>

                <button type='submit' className='text-white w-full rounded mt-10'>Login</button>
            </form>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Login