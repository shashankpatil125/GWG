import React, { useState } from 'react'
import { Icon } from '@iconify/react';

function ComponentSearch(props) {
    const [ph, setph] = useState("Whats new, " + props.UserName + "?");
    return (
        <div style={{ background: "#2f3142" }} className="mt-3 mx-3 rounded-lg flex">
            <img src={props.UserPic} className="h-12 w-12 rounded-full m-2 mr-0"></img>
            <div className='flex w-full'>
                <input style={{ background: "#222433" }} type="text" className='rounded-md flex-1 h-10 my-auto w-full mx-3 px-4 text-white outline-none' placeholder={ph}></input>
            </div>

            <Icon className='text-end my-auto text-3xl text-slate-400 mr-2' icon="ri:image-add-fill" />
            <Icon className='text-end my-auto text-3xl text-slate-400 mr-2' icon="akar-icons:link-chain" />
            <Icon className='text-end my-auto text-3xl text-slate-400 mr-3' icon="entypo:emoji-happy" />
            {/* <input type="text"></input> */}
        </div>
    )
}

export default ComponentSearch