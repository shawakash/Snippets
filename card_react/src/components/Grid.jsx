import React from 'react';

function Grid() {
    return (
        <div className='w-72 h-80 bg-slate-100 hover:shadow-2xl transition-all mx-auto my-5 rounded-3xl flex flex-col p-2'>
            <div id='head' className="h-12 flex flex-row p-2">
                <div className='text-2xl font-bold text-slate-800 hover:text-[26px] hover:text-black transition-all italic'>
                    <a href="http://" target="_blank" >Insight</a>
                </div>
                <div className="grow"></div>
                <div className="flex flex-row justify-between">
                    <button className='mr-4 outline outline-1 rounded-3xl py-1 px-2  text-sm hover:text-white hover:bg-slate-800 outline-slate-800 text-slate-900 hover:outline-none hover:py-[5px] hover:px-[10px] transition-all'>This Week</button>
                    <button className=' outline outline-1 outline-slate-800 rounded-full text-slate-900 px-2 flex justify-center relative text-lg hover:text-white hover:bg-slate-800 hover:outline-none hover:py-[5px] hover:px-[10px] transition-all'>...</button>
                </div>
                <div className="">
                </div>
            </div>
            <div className="body text-left h-52 p-2 mt-3">
                <div className="text-7xl relative">
                    89<span className='text-3xl'>%</span><span className='text-2xl top-1 left-24 absolute'>🚀</span> 
                </div>
                <div className="mt-5 text-slate-900 tracking-normal"><span className='font-bold'>increase in your revenue</span> by  the end of this month is forecasted.</div>
                <div className="text-[12.5px] mt-3 text-slate-600">Harver is about to receive 15k new customers which results in 78% increase in revenue.</div>
            </div>
            <div className="my-3 flex justify-center p-1">
                <div className='border-t-[10px] border-dotted w-14 border-slate-800'></div>
            </div>
        </div>
    );
}

export default Grid;