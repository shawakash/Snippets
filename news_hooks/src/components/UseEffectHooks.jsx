import React, { useEffect, useState } from 'react'

function UseEffectHooks() {
    const [count, setCount] = useState(0);
    // useEffect(()=>{code to run when the component is mounted or re rendered},[stateVariables])
    // if [stateVariables,] is not passed the function runs both on mounting and rerendering
    // if [] empty dependency array is passed the function runs only while mounting Helps in calling 
    // the return part is executed while unmounting
    // if [name] is passed then the function runs only when name is changed(rerendered)
    useEffect(() => {
        console.log('Rerender and Mounting');
    });
    useEffect(() => {
        console.log('Mounting');
    },[]);
    useEffect(() => {
        console.log('Rerender of name & Mounting');
    },[count]);
    useEffect(() => {
        console.log('Rerender of name & Mounting');
        return (() => {
            console.log('unmounting')
        });
    },[count]);
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    );
}

export default UseEffectHooks;