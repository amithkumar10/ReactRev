import React from 'react'


const Props = () => {
  return (
    <div className='w-full mt-10 '>
      <div>
        <h2 className="md:text-4xl text-3xl font-bold text-justify mb-4">Props</h2>
        <p>Props are inputs to a React component that allow data to be passed from a parent component to a child component.</p>
      </div>

      <div>
        <p>In other words, a React component is just a function. Props are the arguments passed to that function.</p>
        <p className='mt-1'>
          <p className='font-semibold'>Mental model:</p>

          Component = function
          <br />
          Props = function parameters
          <br />
          JSX attributes = arguments
        </p>
      </div>

      <div>
        <h3 className='font-semibold mt-4'>Example - Props used to pass data to a component</h3>
        <pre className='bg-gray-800 p-4 rounded-lg overflow-x-auto'>
          {`function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
`}
        </pre>

        <h3 className='font-semibold mt-4'>Used like:</h3>
        <pre className='bg-gray-800 p-4 rounded-lg overflow-x-auto'>
          {`<Greeting name="Amith" />

`}
        </pre>
      </div>


      <div className='flex  items-center gap-2'>
        <h3 className='font-semibold '>Note:</h3>
        <p>Props are read-only data passed from a parent component to a child component to control its behavior or UI.</p>
      </div>

      <div>
        <p className='mt-3'>
          <p className='font-semibold'>Core Rules:</p>

          Props flow parent → child (one direction)
          <br />
          Props make components reusable
          <br />
          Props change → component re-renders
        </p>
      </div>

      <div className='flex flex-col gap-3'>
        <h3 className='font-semibold mt-4'>Basic Exercises:</h3>

        <div>
          <h3 className='font-semibold'>Exercise 1 - Single Prop</h3>
          <pre className='bg-gray-800 p-4 rounded-lg overflow-x-auto'>
            {`function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
`}
          </pre>
        </div>

        <div>
          <h3 className='font-semibold'>Exercise 2 - Multiple Prop</h3>
          <pre className='bg-gray-800 p-4 rounded-lg overflow-x-auto'>
            {`function Product(props) {
  return (
    <p>
      {props.name} - ₹{props.price}
    </p>
  );
}

<Product name="Laptop" price={50000} />

`}
          </pre>
        </div>


        <div>
          <h3 className='font-semibold'>Exercise 3 - Destructuring Prop</h3>
          <pre className='bg-gray-800 p-4 rounded-lg overflow-x-auto'>
            {`function Product({ name, price }) {
  return <p>{name} - ₹{price}</p>;
}

`}
          </pre>
        </div>


        <div>
          <h3 className='font-semibold'>Exercise 4 - Parent → Child flow</h3>
          <pre className='bg-gray-800 p-4 rounded-lg overflow-x-auto'>
            {`function Parent() {
  return <Child age={21} />;
}

function Child({ age }) {
  return <p>Age: {age}</p>;
}


`}
          </pre>
        </div>


      </div>
    </div>
  )
}

export default Props