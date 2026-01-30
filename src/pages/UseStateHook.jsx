import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Hero from '../components/Common/Hero'
import { useState } from 'react'
import StateHookInfo from '../components/UseStateHook/StateHookInfo'
import StateHookExercises from '../components/UseStateHook/StateHookExercises'

const UseStateHook = () => {
    const [count, setCount] = useState(0);
    let [name, setName] = useState("");
    const [visibility, setVisibility] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setVisibility(true);
    }
    return (
        <div className='flex flex-col justify-start items-center w-full min-h-[100vh]'>
            <Navbar />
            <div className='max-w-4xl mx-auto'>
                <div className=' mt-10'>
                    <Hero />
                    <h1 className="text-white font-semibold absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">useState Hook</h1>
                </div>


                <StateHookInfo />
                <StateHookExercises />
            </div>

            <Footer />


        </div>
    )
}

export default UseStateHook