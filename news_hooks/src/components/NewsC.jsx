import React from "react";

    const colors = [
        "#43919B",
        "#DF7857",
        "#9DC08B",
        "#95BDFF",
        "#7DB9B6",
        "#E96479",
    ];

function NewsC(props) {
    const randomColor = colors[Math.floor(Math.random() * 6)];

    function deleteNote() {
        props.newNews(props.id);
        console.log(props.id);
    }
    const customStyle = {
        backgroundColor: randomColor,
    };
    return (
        <>
            <li id={props.id} className="max-w-sm min-w-[208px] w-fit h-fit bg-slate-500 mx-8  rounded-[30px] p-4 my-10 hover:shadow-2xl transition-all" style={customStyle}>
                <div id="head" className="text-base cursor-default font-semibold font-mono text-slate-600 underline decoration-[#777] decoration-2 underline-offset-4">
                {" "}
                {props.content.publishedAt}{" "}
                </div>{" "}
                <div className="rounded-full my-5 flex justify-center">
                    <img className="rounded-full w-4/5" src={props.content.urlToImage} alt={props.content.title} />
                </div>
                
                <div id="body" className="text-lg text-slate-200 font-medium tracking-wide text-ellipsis overflow-hidden  min-w-[208px] min-h-[50px]  ml-4 my-3">
                {" "}
                {props.content === {} && <span> ~ </span>} {props.content.content}{" "}
                </div>{" "}
                <div id="foot" className="flex justify-between mx-2 mt-8 mb-4 px-2">
                
                    <button className="w-fit h-fit px-2 py-1 text-slate-600 font-mono rounded-full font-semibold hover:font-bold transition-all hover:shadow-2xl hover:shadow-slate-200 hover:text-slate-200 hover:bg-slate-600 outline outline-slate-600 outline-2" onClick={deleteNote}>
                    {" "}
                    <a href={props.content.url} target='_blank'>Read More</a>{" "}
                    </button>{" "}
                    <button className="w-fit h-fit px-2 py-1 text-slate-600 font-mono rounded-full font-semibold hover:font-bold transition-all hover:shadow-2xl hover:shadow-slate-200 hover:text-slate-200 hover:bg-slate-600 outline outline-slate-600 outline-2" onClick={deleteNote}>
                    {" "}
                    Delete{" "}
                    </button>{" "}
                
                </div>{" "}
            </li>{" "}
        </>
    );
}

export default NewsC;
