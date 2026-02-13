import React from 'react'

const RefInfo = () => {
  return (
    <div>

        <div>
            <h2 className='text-4xl font-semibold text-white mt-10 '>What is useRef Hook?</h2>
            <p className=' text-justify mb-6'>Think of useRef like a bookmark in a book that remembers the exact spot so you can come back anytime. In React, it lets you keep a reference to something—like an input box—between renders without causing the component to update. For example, if you have a login form and want the cursor to jump into the username field when the user clicks “Edit,” useRef gives you a direct handle to that input. You create a ref, attach it to the input, and React stores the actual DOM element in ref.current. Then when the button is clicked, calling ref.current.focus() moves the cursor instantly, all without re-rendering the component. This makes useRef perfect for focusing inputs, scrolling, storing timers, or keeping any value that doesn’t need to trigger a UI update.</p>
        </div>
        
        <pre className='bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto mb-6'>
            {`import React, { useRef } from "react";

function LoginForm() {
  const inputRef = useRef(null); // create a ref

  const handleEditClick = () => {
    inputRef.current.focus(); // focus the input when button is clicked
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Username" />
      <button onClick={handleEditClick}>Edit Username</button>
    </div>
  );
}

export default LoginForm;
`}
        </pre>

        <h2 className='text-4xl font-semibold text-white mt-10'>How useRef Hook Works?</h2>
        <p className=' text-justify mb-6'>useRef works by giving you a special object with a .current property that stays the same between renders. When you create a ref using useRef() and attach it to a DOM element, React automatically stores the actual element inside ref.current after the component renders. This means you can directly access or modify that element whenever you want—for example, focusing an input, scrolling to a section, or reading a value—without causing the component to re-render. Because React doesn’t track changes to .current for rendering, it’s a lightweight and efficient way to hold references, store timers, or keep previous values across renders while keeping your UI fast and responsive.</p>
    </div>
  )
}

export default RefInfo