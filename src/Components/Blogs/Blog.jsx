import React from 'react';

const Blog = () => {
    return (
        <div className='mx-5 p-3'>
            <br />
           <div className=' p-5 rounded-md bg-red-400'>
           <h1 className=' text-xl	 font-bold'>Q.1: When is the context api used?</h1>
            <p>Ans:The Context API is a React structure that enables you to exchange unique details and assists in solving  the process of passing data from one component via several interconnected components to the component that needs from all levels of your application.</p>
           </div>
            <br />
           <div className=' p-5 rounded-md  bg-red-400'>
           <h1 className=' text-xl	 font-bold'>Q.2: What is custom hook?</h1>
            <p>Ans:A custom hook is a function that encapsulates some common logic or behavior using one or more built-in hooks that can be reused across multiple components.
                Custom hooks allow you to extract and share stateful logic between components without the need for inheritance, higher-order components, or render props. They follow the same rules as built-in hooks, meaning they can only be called at the top level of a functional component or another custom hook.</p>
           </div>
            <br />
           <div className=' p-5 rounded-md  bg-red-400'>
           <h1 className=' text-xl	 font-bold'>Q.3: What is useRet, why is it used?</h1>
            <p>Ans:The useRef hook returns a mutable ref object that persists for the entire lifetime of the component. You can use it to access and modify the properties of a DOM element or a component instance directly. Unlike state, updating a ref object doesn't trigger a re-render of the component.</p>
           </div>
            <br />
           <div className=' p-5 rounded-md  bg-red-400'>
           <h1 className=' text-xl	 font-bold'>Q.4: What is useMemo?  Why is it used?</h1>
            <p>Ans:useMemo is a hook in React used to memoize the result of a function call and optimize the performance of a React application.

                When you use useMemo, you pass a function and a list of dependencies. React will only rerun the function and recalculate the memorized result value if any dependencies change. If no dependencies have changed, React will return the cached value of the memorized result.</p>

           </div>
        </div>
    );
};

export default Blog;