import React from 'react'

const RouteParams = () => {
    return (
        <div className='w-full'>
            <div className='mt-10'>
                <h2 className='md:text-4xl text-3xl font-bold text-justify'>Route Params</h2>
            </div>

            <div>
                <p className='text-justify'>Route params are dynamic values embedded in the URL that let you pass data through routes, commonly used for IDs or user-specific pages. React Router exposes these values using the useParams hook, allowing a single component to handle multiple dynamic routes. This avoids hard-coding multiple routes for similar pages.</p>
            </div>

            <div className='mt-4'>
                <pre className='bg-gray-800 p-3 mb-3'>{`<Route path="/user/:id" element={<User />} />
`}</pre>
                <pre className='bg-gray-800 p-3 mb-3'>{`const { id } = useParams();
`}</pre>
            </div>

        </div>
    )
}

export default RouteParams