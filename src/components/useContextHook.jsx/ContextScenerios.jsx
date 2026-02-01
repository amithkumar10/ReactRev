import React from 'react'

const ContextScenerios = () => {
  return (
    <div>
        <div>
            <h2 className='text-3xl font-bold mb-5 text-white'>When useContext Hook is Used?</h2>
        </div>

        <div>
            <ul className='list-disc list-inside space-y-2 text-white'>
                <li><strong>Authentication State</strong> - Sharing login status across routes and components.</li>
                <li><strong>Theme</strong> - Changing the overall theme of the application.</li>
                <li><strong>User Preferences / Language</strong> - Centralized configuration access.</li>
            </ul>
        </div>
    </div>
  )
}

export default ContextScenerios