import React from 'react'
import ComponentA from './PropDrilling/ComponentA'

const ContextInfo = () => {
  return (
     <div className='mt-5'>
            <div>
                <h2 className='text-4xl font-bold  mt-8'>What is useContext Hook?</h2>
                <p className='text-justify mb-4'>useContext is a React Hook that lets a component consume shared data directly from a context, without passing props through every level of the component tree. In simple terms: it's how React enables global-ish state for a specific part of the app.</p>
            </div>

            <div className='mb-5'>
                <h2 className='text-4xl font-bold '>Why Use useContext Hook?</h2>
                <p className='text-justify mb-4'>Prop drilling is a scalability killer. When many nested components need the same data (auth info, theme, language), passing props manually becomes messy and fragile. useContext solves this by allowing any component to read shared data directly from a provider, improving maintainability and architectural clarity.</p>

               <div className='min-w-4xl h-90 flex justify-between'>
                 <img className='max-w-3xl h-full' src="/propDrill.png" alt="" />
                 <img className='max-w-sm h-full' src="/propDrillB.png" alt="" />
               </div>
            </div>
            
                <div className='mb-5'>
                  <h3 className='font-semibold mb-2'>Example of Prop Drilling</h3>
                  <pre className='bg-gray-800 p-5'>
                    {`//Check Code`}<ComponentA /></pre>
                </div>

            <div>
                <h2 className='text-4xl font-bold '>How useContext Hook Works?</h2>
                <p className='text-justify mb-4'>You create a context using createContext, wrap part of your app with a Provider, and pass a value to it. Any child component can then access that value using useContext. When the provider's value changes, all consuming components re-render automatically.</p>

                <pre className='bg-gray-800 p-5'>{`const [count, setCount] = useState(0);
            
// setCount is the setter function that updates the count value`}</pre>
            </div>
        </div>
  )
}

export default ContextInfo