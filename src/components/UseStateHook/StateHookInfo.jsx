import React from 'react'

const StateHookInfo = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl font-bold  mt-8'>What is useState Hook?</h2>
                <p className='text-justify mb-4'>The useState hook is a special function in React that allows you to add state management to functional components. It enables you to create state variables and provides a way to update those variables, triggering re-renders of the component when the state changes.</p>
            </div>

            <div>
                <h2 className='text-4xl font-bold '>Why Use useState Hook?</h2>
                <p className='text-justify mb-4'>useState is used to handle dynamic UI behavior—things like form inputs, counters, toggles, modals, and user interactions. Bottom line: when the UI depends on data that can change, useState is the default tool. It replaces class-based state with a cleaner, faster, and more predictable model.</p>
            </div>

            <div>
                <h2 className='text-4xl font-bold '>How useState Hook Works?</h2>
                <p className='text-justify mb-4'>The useState hook works by returning an array with two elements: the current state value and a function to update that value. You can use array destructuring to assign these values to variables. When you call the update function, React will re-render the component with the new state value.</p>

                <pre className='bg-gray-800 p-5'>{`const [count, setCount] = useState(0);
            
// setCount is the setter function that updates the count value`}</pre>
            </div>
        </div>
    )
}

export default StateHookInfo