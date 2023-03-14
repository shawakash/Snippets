import React, { useEffect, useRef, useState } from "react";
import NewsC from "./NewsC";

function News() {
    const topic = useRef('');
    let newTopic = '';
    function handleTopicChange() {
        console.log(topic.current.value);
        newTopic = topic.current.value != '' ? topic.current.value : "apple" ;
        fetchData(newTopic);
    }
    const apiKey = "93f055bafb73468da40509b958d5e3dc";
    const apiUrl = (newTopic) => `https://newsapi.org/v2/everything?q=${newTopic}&from=2023-02-14&sortBy=publishedAt&apiKey=93f055bafb73468da40509b958d5e3dc`;

    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        fetchData('spacex');
    }, []);
    async function fetchData(newTopic) {
        try {
        const response = await fetch(apiUrl(newTopic));
        const jsonData = await response.json();
        setNewsList(jsonData.articles);
        } catch (e) {
        console.log(e, "error occured");
        }
    }
    function updateNewsList(index) {
        setNewsList(newsList.filter((news, newsIndex) => {
            return (newsIndex != index);
        }));
    }
    
    return (
        <div className='my-10 ml-14'>
            <div
            className = "font-bold text-7xl hover:shadow-2xl w-fit p-2 mx-auto text-teal-500 hover:text-teal-600 transition-all rounded-xl" ><a className="w-fit">News</a></div>
            <div className = " flex mx-30 mt-7 mb-3 w-fit mx-auto" >
                <input type = "text" onKeyUp={handleTopicChange} className = " max-w-lg w-fit h-fit min-h-[33px] min-w-[330px] rounded-full px-6 text-lg tracking- mr-5 py-1 mx-14 text-center bg-slate-200 caret-slate-600 focus:bg-slate-100 transition-all" ref = {  topic} minLength = '20' maxLength = '400' placeholder = 'Search' />
                    <button onClick = {handleTopicChange} className = "w-fit h-fit px-2 py-1 text-slate-600 font-mono rounded-full font-semibold text-lg hover:font-bold transition-all hover:shadow-2xl hover:shadow-slate-200 hover:text-slate-200 hover:bg-slate-600 border-slate-600 border-2" > 🚀 </button>
            </div>
            
        <ul className="flex flex-wrap items-center mt-5 transition-all">
            {" "}
            {newsList.map((news, index) => {
                return (
                    <NewsC 
                        key={index}
                        id={index}
                        content={news}
                        newNews = {updateNewsList}
                    />
                
            );
            })}{" "}
        </ul>
        </div>
    );
}

export default News;
