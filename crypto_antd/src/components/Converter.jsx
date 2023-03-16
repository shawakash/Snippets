import { Card, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useEffect, useRef, useState } from "react";

function Converter() {
    const apiUrl = `https://api.coingecko.com/api/v3/exchange_rates`;
    const [coinList, setCoinList] = useState({});
    const [options, setOptions] = useState([]);
    const [tokenNumber, setTokenNumber] = useState(1);
    const [fromCrypto, setFromCrypto] = useState({'label':'btc', 'value':'Bitcoin', 'rate':1});
    const [toCrypto, setToCrypto] = useState({'label':'btc', 'value':'Bitcoin', 'rate':1});
    const [result, setResult] = useState(1);
    useEffect(()=>{
        fetchData();
    },[]);
    async function fetchData() {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        console.log(jsonData);
        setCoinList(jsonData.rates);
    }
    useEffect(()=>{
        if(coinList == {}) return;
        let coinArray = Object.entries(coinList)
        console.log(coinArray);
        setOptions(coinArray.map((coins)=>{
            return ({'label':coins[0], 'value':(coins[1].name), 'rate': (coins[1].value)})
        }))
        console.log(options);
        setResult(()=> {
            return (tokenNumber*(toCrypto.rate)/(fromCrypto.rate)).toFixed(4);
        })
    },[coinList, fromCrypto, toCrypto, tokenNumber, result]);
    
    return (
        <div className="flex justify-center text-center my-72  w-fit mx-auto hover:shadow-2xl transition-all">
            <Card
                title={<span className="">Crypto Converter</span>}
                bordered={false}
                className='min-w-[400px] '
            >
            <div className="flex justify-between">
                <Select defaultValue={'Bitcoin'} onSelect={(value) => {
                    let curCoin = options.find((coins)=>{
                        return coins.label == value 
                    });
                    console.log(curCoin)
                    setFromCrypto(curCoin)
                    }} className="w-52 p-2 my-2">
                    {options.map((coins)=> <Option value={coins.label} className="">{coins.value}</Option>)}
                </Select>
                <Select defaultValue={'Bitcoin'} onSelect={(value) => {
                    let curCoin = options.find((coins)=>{
                        return coins.label == value 
                    });
                    console.log(curCoin)
                    setToCrypto(curCoin)
                    }} className="w-52 p-2 my-2">
                    {options.map((coins)=> <Option value={coins.label} className="">{coins.value}</Option>)}
                </Select>
            </div>



            <Input placeholder="Number of tokens" addonBefore='Count' className="w-fit " onChange={(e)=>{{
                setTokenNumber(e.target.value);
            }}} />
            <p className="mt-6 text-lg font-semibold tracking-wide">{tokenNumber} {fromCrypto.value}  =  {result} {toCrypto.value}</p>
            </Card>
        </div>
    );
}

export default Converter;
