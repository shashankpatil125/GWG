import React from 'react'

function SquadThubmNail(props) {
    return (
        <div className='flex w-full my-1'>
            <div className='flex w-full bg-black p-2 pl-5 rounded-lg' >
                <div className='bg-stone-600 rounded-full h-12 w-12'></div>
                <p className='text-white text-xl mx-4 my-auto'>Name of Squad</p>
                <p className=' text-stone-500 my-auto'>3/5 </p>
            </div>
        </div>
    )
}

export default SquadThubmNail