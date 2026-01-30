import React from 'react'

const ReactRouter = () => {
    return (
        <div className='w-full'>
            <div className='mt-10'>
                <h2 className='md:text-4xl text-3xl font-bold text-justify'>React Router</h2>
            </div>

            <div>
                <p className='text-justify'>React Router is the standard library used in React to handle client-side navigation in single-page applications. Instead of loading a new page from the server, it switches components based on the URL, making the app feel fast and seamless. You define routes that map a path (like /login or /dashboard) to a component, and React Router renders the correct component when the URL changes.</p>
            </div>

            <div className='mt-4'>

                <pre className='bg-gray-800 p-3 mb-3'>
                    {`//Main.jsx
                
   <BrowserRouter>
        <App />
   </BrowserRouter>
`}
                </pre>

                <pre className='bg-gray-800 p-3'>
                    {`//App.jsx

 <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
`}
                </pre>
            </div>
        </div>
    )
}

export default ReactRouter