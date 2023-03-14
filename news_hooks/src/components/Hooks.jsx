import React, { useEffect, useRef, useState } from 'react';
let globalIncrementer = 0;
function Hooks() {
    const [count, setCount] = useState(0);  
    let incrementer = 0;
    // UseState is used to rerender a pariticular var. or a state
    const countRef = useRef(0);
    // UseRef is used to store the rerendered value without rerendring matlab fir se component ko bulane ki jarrut nahi padti hai aur value store bhi hoo jati hai ---> Mainly used in Inputs
    useEffect(() => {
        console.log('State Change', count);
        console.log('Ref Change', countRef.current);
        console.log('Component Variable Change', incrementer);
        console.log('Outside Funct. Component Variable Change', globalIncrementer);
        return (()=> console.log('Unmounted Hooks.jsx'));  //called whenn hook.jsx is unmounted or while rerendring as rerendering involves umounting
    }); // for both mountaining and rerendring of all present states
    // UseEffect is used to perform function/s when the components gets rerendered due to particular state or it gets mounted  ----> Mainly used in Apis calling
    
    // Diff b/w useState & useEffect :: useState executes code related to its own state whereas useEffect executes codes related to whole component
    
    // Diff b/w useState & useRef :: useState manipulates state by rerendering/callingthe whole component whereas useRef stores info. without rerendering whole component
    function increment() {
        setCount(count + 1);
        countRef.current = countRef.current + 1;
        incrementer += 1;
        globalIncrementer += 1;
    }
    return (
        <div>
            <p>Using UseState : {count}</p>
            <p>Using UseRef : {countRef.current}</p>
            <p>Using LocalVar : {incrementer}</p>
            <p>Using GlobalVar : {globalIncrementer}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Hooks;