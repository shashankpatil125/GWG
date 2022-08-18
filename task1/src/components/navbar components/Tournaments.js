import React from 'react'
import Navbar from '../feed/Navbar'
import "/workspace/ui/task1/src/components/feed/feed.css"

function Tournaments() {
    return (
        <div className='h-screen w-screen' style={{ background: "#222433" }}>
            <Navbar />
            <div className='ml-60 h-screen w-7/12 bg-slate-500 px-4 pt-16 overflow-scroll example border-l border-r border-neutral-600' style={{ background: "#222433" }} >
                <div className='w-full bg-black h-60 mt-3 rounded-lg'></div>
                <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-2  mt-2    ">
                    <div className='bg-black mx-1 rounded-lg p-3'>
                        <div className='w-full bg-stone-900 h-28 rounded-lg'></div>
                        <p className='text-center text-white text-xl font-semibold '>Game Name</p>
                        <p className='text-center text-white'>Game Date</p>
                        <button className='w-full px-3 py-2 bg-amber-500 rounded-md font-semibold'>Register</button>
                    </div>
                    <div className='bg-black mx-1 rounded-lg p-3'>
                        <div className='w-full bg-stone-900 h-28 rounded-lg'></div>
                        <p className='text-center text-white text-xl font-semibold '>Game Name</p>
                        <p className='text-center text-white'>Game Date</p>
                        <button className='w-full px-3 py-2 bg-amber-500 rounded-md font-semibold'>Register</button>
                    </div>
                    <div className='bg-black mx-1 rounded-lg p-3'>
                        <div className='w-full bg-stone-900 h-28 rounded-lg'></div>
                        <p className='text-center text-white text-xl font-semibold '>Game Name</p>
                        <p className='text-center text-white'>Game Date</p>
                        <button className='w-full px-3 py-2 bg-amber-500 rounded-md font-semibold'>Register</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tournaments