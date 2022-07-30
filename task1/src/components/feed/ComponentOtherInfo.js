import React from 'react'

function ComponentOtherInfo() {
    return (
        <div className='h-screen w-64 ' style={{ background: "#222433" }}>
            <div className=' justify-end '>
                <p className='font-bold text-zinc-400 text-lg m-4 mx-6'>Friends</p>
                <div className='flex mb-3'>
                    <img className='bg-black rounded-full h-10 w-10  ml-6'></img>
                    <p className='my-auto ml-3 text-lg text-stone-500'>@Friend1</p>
                </div>
                <div className='flex mb-3'>
                    <img className='bg-black rounded-full h-10 w-10  ml-6'></img>
                    <p className='my-auto ml-3 text-lg text-stone-500'>@Friend2</p>
                </div>
                <div className='flex mb-3'>
                    <img className='bg-black rounded-full h-10 w-10  ml-6'></img>
                    <p className='my-auto ml-3 text-lg text-stone-500'>@Friend3</p>
                </div>
                <div className='flex mb-3'>
                    <img className='bg-black rounded-full h-10 w-10  ml-6'></img>
                    <p className='my-auto ml-3 text-lg text-stone-500'>@Friend4</p>
                </div>

                <p className='font-bold text-zinc-400 text-lg m-4 mx-6'>Tournaments</p>
                <button className='bg-yellow-500 mx-6 py-1 px-3 rounded-md w-3/4 mb-2 font-semibold text-zinc-700'>
                    PUBG
                </button>
                <button className='bg-yellow-500 mx-6 py-1 px-3 rounded-md w-3/4 mb-2 font-semibold text-zinc-700'>
                    Counter Strike
                </button>
                <button className='bg-yellow-500 mx-6 py-1 px-3 rounded-md w-3/4 mb-2 font-semibold text-zinc-700'>
                Valorant
                </button>
                
                
            </div>
        </div>
    )
}

export default ComponentOtherInfo