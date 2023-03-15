import React, { useEffect, useRef, useState } from 'react';
import Option from './Option';

function Convert() {
    const [rates, setRates] = useState([]);
    const [curRate, setRate] = useState({'from': 1, 'to': 1});
    const numberOfTokens = useRef(0);
    const toRef = useRef(null);
    const fromRef = useRef(null);
    const result = useRef(0);
    console.log(result)
    const apiUrl = `https://api.coingecko.com/api/v3/exchange_rates`;
    useEffect(()=>{
        fetchData();
    },[]);
    async function fetchData() {
        try{
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            setRates(()=>{
                let newRates = Object.keys(jsonData.rates).map((key) => {
                    let value = jsonData.rates[key];
                    return value;
                });
                console.log(newRates)
                return newRates;
            });
        }catch(e) {
            console.log(e, 'Error Occured');
        }
    }
    function updateCoinValue() {
        setRate((curRate)=>{
            let f = rates.filter((rate)=>{
                return (rate.name === fromRef.current.value);
            });
            let t = rates.filter((rate)=>{
                return (rate.name === toRef.current.value);
            });

            console.log(fromRef.current);
            return ({...curRate, [fromRef.current.id]: f[0].value, [toRef.current.id]: t[0].value});
        });
        
    }
    function convert() {
        updateCoinValue();
        console.log(numberOfTokens.current.value)
        console.log(curRate)
        result.current = (numberOfTokens.current.value)*(curRate.to)/(curRate.from);
    }
    return (
        <div className="">
        <div className='flex gap-3 Convert justify-center mt-40'>
            <select id='from' ref={fromRef} onChange={updateCoinValue} className="px-2 py-0.5 text-lg w-40 mx-8 text-teal-500 hover:text-slate-100 hover:font-bold transition-all border-2  text-center border-teal-500 rounded-full  font-semibold font-mono hover:bg-teal-500 ">
                {rates.map((rate,index)=>{
                    return (
                        <Option 
                            key = {index}
                            id = {index}
                            value = {rate}
                        />
                    );
                })}
            </select>
            <div className="">
                <input type="text" className="px-2 py-2 text-teal-600 text-xl w-fit text-center mx-8  hover:font-bold transition-all rounded-full font-semibold font-mono hover:bg-slate-100 focus:bg-slate-100 bg-slate-200 " ref={numberOfTokens} onChange={convert} placeholder="Enter your crypto" />
            </div>
            <select id='to' ref={toRef} onChange={updateCoinValue} className='px-2 py-0.5 text-center text-lg w-40 mx-8 hover:text-slate-100 hover:font-bold transition-all border-2 border-teal-500 rounded-full text-teal-500 font-semibold font-mono hover:bg-teal-500 ' >
                {rates.map((rate)=>{
                    return (
                        <Option 
                            value = {rate}
                        />
                    );
                })}
            </select>
            </div>
            <div className="flex flex-col items-center justify-center my-10 ">
            <button className="w-fit h-fit px-4 py-2 my-4 text-slate-600 font-mono rounded-full font-semibold hover:font-bold transition-all hover:shadow-2xl  text-xl hover:shadow-slate-200 hover:text-slate-200 hover:bg-slate-600 outline outline-slate-600 outline-2" onClick={convert}>Calculate</button>
            <p className="font-bold text-7xl hover:shadow-2xl w-fit p-2  text-teal-500 hover:text-teal-600 transition-all rounded-xl">{result.current}</p>
            </div>
            
        </div>
    );
}

export default Convert;