import React from 'react'
import { useNavigate } from 'react-router-dom';

const ImpHooks = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div>
            <h2 className='md:text-4xl text-3xl font-bold text-justify mt-10'>Important Hooks in React</h2>
        </div>

        <div>
            <p className='text-justify'>Some of the most important and commonly used hooks in React include:</p>
            <ul className='list-disc list-inside mt-4'>
                <li ><strong onClick={() => navigate("/hooks/useStateHook")} className='text-white cursor-pointer underline'>useState:</strong> Allows you to add state to functional components.</li>
                <li><strong onClick={()=> navigate("/hooks/useEffectHook")} className='text-white underline cursor-pointer'>useEffect:</strong> Enables you to perform side effects in function components, such as data fetching or subscriptions.</li>
                <li><strong onClick={()=> navigate("/hooks/useContextHook")} className='text-white cursor-pointer underline'>useContext:</strong> Provides a way to pass data through the component tree without having to pass props down manually.</li>
                <li><strong onClick={()=> navigate("/hooks/useReducerHook")} className='text-white cursor-pointer underline'>useReducer:</strong> Offers an alternative to useState for managing more complex state logic in functional components.</li>
                <li><strong onClick={()=> navigate("/hooks/useRefHook")} className='text-white cursor-pointer underline'>useRef:</strong> Gives you a way to access & interact with DOM or persist values across renders without causing re-renders.</li>
            </ul>
        </div>
    </div>
  )
}

export default ImpHooks