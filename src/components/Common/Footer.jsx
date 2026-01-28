import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full mt-30 flex justify-center items-center bg-black py-20'>
       <div className='max-w-7xl w-full flex justify-between items-center px-4 '>
         <div className='flex justify-center gap-4 items-center text-white'>
            <img className='h-20 w-20' src="/react-footer.png" alt="" />
            <h1 className='text-white font-bold text-4xl'>ReactRev</h1>

        </div>

        <div >
            <div className='flex gap-16 justify-between'>
                <div className='text-white '>
                    <text className='font-semibold text-lg '>Links</text>
                    <ul className='font-light mt-3 text-md cursor-pointer'>
                        <li>Basics</li>
                        <li>Hooks</li>
                        <li>Routing</li>
                        <li>API Calls</li>
                        <li>Zustand</li>
                        <li>Next.js</li>
                    </ul>
                </div>

                <div className='text-white'>
                   <text className='font-semibold text-lg '>Connect</text>
                    <ul className='font-light mt-3 text-md cursor-pointer'>
                        <li>Linkedin</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>

                <div className='text-white'>
                   <text className='font-semibold text-lg'>Developer</text>
                    <div className='font-light mt-3 text-md'>
                        <p>Amith Kumar</p>
                        <p className='mt-2'>© 2026 ReactRev. All rights reserved.</p>   
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Footer