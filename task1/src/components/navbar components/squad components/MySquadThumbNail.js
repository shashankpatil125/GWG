import React from 'react'

function MySquadThumbNail() {
    return (
        <div className='flex w-full  border-b border-gray-600'>
            <div className='flex w-full p-1 pl-5 rounded-lg hover:shadow-inn'>
                <div className='bg-stone-600 rounded-full h-12 w-12'></div>
                <p className='text-white text-xl mx-4 my-auto'>Name of Squad</p>
                <p className=' text-stone-500 my-auto'>5/5 </p>
            </div>
        </div>
    )
}

export default MySquadThumbNail