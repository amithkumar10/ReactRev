import React from 'react'

const CustomHookInfo = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-4xl font-semibold text-white'>What are Custom Hooks?</h2>
            <p className='text-justify mb-6'>Custom Hooks in React are reusable functions that let you encapsulate and share stateful logic between components. They always start with use and can internally use other hooks like useState or useEffect. For example, useCounter can manage a counter’s state and provide increment, decrement, and reset functions, which can be used in multiple components without repeating code.</p>

            <h2 className='text-4xl font-semibold text-white'>Why to use Custom Hooks?</h2>
            <p className='text-justify mb-6'>Custom Hooks help you avoid duplication and organize logic cleanly. Instead of writing the same useEffect or useState logic in multiple components, you can extract it into a custom hook. For instance, a useFetch hook can handle API calls for different components, keeping your components clean and focused on rendering.</p>

            <h2 className='text-4xl font-semibold text-white'>How to create Custom Hooks?</h2>
            <p className='text-justify mb-6'>To create a Custom Hook, define a function starting with use, use React hooks inside it for your logic, and return the state or functions your components need. </p>

            <p className='font-semibold'>Example:</p>

            <pre className='bg-gray-800 p-4 rounded-md text-white'>
                {`function useToggle(initialValue = false) {
                
  const [state, setState] = useState(initialValue);
  const toggle = () => setState(!state);
  return [state, toggle];
}

// Usage in a component
function MyComponent() {
  const [isOn, toggleIsOn] = useToggle();
  return <button onClick={toggleIsOn}>{isOn ? 'ON' : 'OFF'}</button>;
}`}

            </pre>
        </div>
    )
}

export default CustomHookInfo