import React from 'react'
import { Icon } from '@iconify/react';



function ComponentPost(props) {
    return (
        <div>
            <div style={{ background: "#2f3142" }} className="mt-3 mx-3 rounded-lg pb-2">
                <div className='flex w-full'>
                    <img alt="img" src={props.PosterImg} className="w-10 h-10 m-3 rounded-full"></img>
                    <p className='my-auto text-xl text-white'>{props.PosterName}</p>
                </div>
                <p className='mx-4 text-gray-400'>{props.PostDisc}</p>
                {/* <img alt="img" className='mt-6 mx-auto w-4/5' src={props.PostPic}></img> */}
                <div className='flex'>
                    <button className='flex bg-slate-700 rounded-md w-fit px-2 py-1 text-xl my-4 mx-5 mr-2' >
                        <Icon className='text-gray-400 my-auto mr-1' icon="bxs:like" />
                        <p className='text-lg my-auto text-gray-400' >LIKE</p>
                    </button>
                    <button className='flex bg-slate-700 rounded-md w-fit px-2 py-1 text-xl my-4' >
                        <Icon className='text-gray-400 my-auto mr-1' icon="bxs:dislike" />
                        <p className='text-lg my-auto text-gray-400' >DISLIKE</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ComponentPost