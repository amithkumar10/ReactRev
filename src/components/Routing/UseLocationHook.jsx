import React from 'react'
import { useLocation } from 'react-router-dom'

const UseLocationHook = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className='w-full'>
            <div className='mt-10'>
                <h2 className='md:text-4xl text-3xl font-bold text-justify'>useLocation Hook</h2>
            </div>

            <div>
                <p className='text-justify'>useLocation is a React Router hook that gives you information about the current URL, including the pathname, search query, and navigation state. It’s mainly used when components need to react to route changes, highlight active links, or read data passed during navigation. For example, you have a navbar with links: Home, Dashboard, Profile.
                    You want the currently active page link to be highlighted.

                    This is where useLocation fits.</p>
            </div>

            <div className='mt-4'>
                <pre className='bg-gray-800 p-3'>
                    {`const location = useLocation();
console.log(location.pathname);
`}
                </pre>
            </div>
        </div>
    )
}

export default UseLocationHook