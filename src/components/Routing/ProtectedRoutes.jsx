import React from 'react'

const ProtectedRoutes = () => {
  return (
   <div className='w-full'>
            <div className='mt-10'>
                <h2 className='md:text-4xl text-3xl font-bold text-justify'>Protected Routes</h2>
            </div>

            <div>
                <p className='text-justify'>Protected routes restrict access to certain pages unless a condition is met, usually authentication or authorization. The idea is to wrap routes with logic that checks whether the user is allowed to enter, and redirect them if not. This pattern is critical for dashboards, admin panels, and paid features.</p>
            </div>

            <div>
                <pre className='bg-gray-800 p-3'>{`const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};                `}</pre>
            </div>
        </div>
  )
}

export default ProtectedRoutes