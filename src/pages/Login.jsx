import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(username === "amithkumar_10" && password === "React@rev"){
            setSuccess(true);
            alert("Login Successful!");
            navigate("/dashboard");
        }else{
            alert("Invalid Credentials. Please try again.");
            setPassword("");
            setUsername("");
        }
    }

    if(success){
        localStorage.setItem("authenticated", "true");
    }

    
  return (
    <div className='flex flex-col md:min-h-[100vh] md:flex-row bg-white justify-center w-screen'>
     <div className='flex flex-col md:flex-row  max-w-5xl w-full items-center justify-between'>
        
        {/* LHS */}
        <div className='mb-8'>
            <div>
             <img src="/LoginImg.gif" className=' h-30 w-50 md:h-40 md:w-60' alt="LoginImg" />   
            <h1 className='text-black text-xl  md:text-5xl font-bold'>Hi Amith!</h1>
            <h3 className='hidden text-black text-sm md:text-lg sm:block'>Login to access your account</h3>
            </div>
        </div>

        {/* RHS*/}
        <div>
            <div>
                <form action="" onSubmit={handleSubmit} className='flex flex-col p-10 md:p-20 rounded border-solid border-2 border-black'>
                    
                <div className='mb-5 text-center'>
                <h2 className='font-bold text-4xl md:text-3xl text-black cursor-pointer' onClick={window.location.reload}>ReactRev</h2>
                <h2 className='text-balck text-lg md:text-xl font-semibold'>Login</h2>
                </div>   

                <label htmlFor=""  className=' mt-2'>Username:</label>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username' className='border-2 border-black w-full rounded-md p-1'/>

                <label htmlFor=""  className='mt-2'>Password:</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter password' className='border-2 border-black rounded-md w-full   p-1'/>

                <button type='submit' className='text-white w-full rounded mt-10'>Login</button>
            </form>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Login