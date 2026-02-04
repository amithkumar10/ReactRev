import React from 'react'

const EffectHookInfo = () => {
    return (
        <div className='my-5'>
            <div className='mb-5'>
                <h2 className="text-4xl font-bold  text-white">What is useEffect Hook?</h2>
                <p className='text-justify'>useEffect is a React hook that lets you run extra code after the component renders. It is mainly used for tasks that are not directly part of showing UI, like fetching data from an API, saving or reading data from localStorage/cookies, setting timers, or interacting with the browser. Since React rendering should only focus on returning JSX, useEffect is used to handle these outside tasks safely.</p>
            </div>

            <div className='mb-5'>
                <h2 className="text-4xl font-bold  text-white">Why is useEffect Hook used?</h2>
                <p className='text-justify'>React introduced useEffect so that rendering stays clean and predictable. If we run side-effect code directly while rendering (like API calls, timers, subscriptions), it can cause bugs, slow performance, and unexpected UI behavior. useEffect runs after the component renders, so React first updates the UI, then runs the extra logic safely. It also works like the functional component replacement for class lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount.</p>
            </div>

            <div className='mb-5'>
                <h2 className="text-4xl font-bold text-white">How useEffect Hook Works</h2>
                <p className='text-justify'>After a component renders, React schedules the useEffect callback to run, and whether it runs on every render, only once, or when specific values change depends on the dependency array; no array means run after every render, an empty array ([]) means run only once on mount, and a populated array means run only when those dependencies change. If the effect returns a function, React treats it as cleanup logic and runs it before the effect re-runs or when the component unmounts, ensuring proper resource management.</p>
            </div>

            <div >
                <h2 className="text-4xl font-bold  text-white"><i>Note </i>- Difference Between Rendering and Mounting</h2>
                <p className='text-justify mb-3'>
                    Rendering in React means React is building or updating the UI output of a component. Basically, React calls your component function again and decides what JSX (UI) should appear on the screen. Rendering can happen many times whenever state, props, or context changes.
                </p>
                <p className='text-justify'>Mounting means the component is being shown on the screen for the first time. It happens only once when the component is first added to the DOM. After mounting, future updates are called re-renders, not mounting.</p>

            </div>
        </div>
    )
}

export default EffectHookInfo