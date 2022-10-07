import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'



function CreatePost(props) {
    const ph = ("Whats new, " + props.UserName + "?");
    const [disc, setdisc] = useState('');
    const [file, setfile] = useState('');



    const supabase = createClient(
        process.env.REACT_APP_URL,
        process.env.REACT_APP_API        
    )

    async function upload() {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const showTime = current.getHours() + ':' + current.getMinutes();
        
        // const { data, error } = await supabase
        await supabase
            .from('posts')
            // .insert([{ discription: disc, date: date, time: showTime, file:file }])
            .insert([{ discription: disc, date: date, time: showTime }])
        setdisc('')
        console.log(file);
    }

    return (
        <div style={{ background: "#2f3142" }} className="mt-3 mx-3 rounded-lg ">
            <div className='flex'>
                <img src={props.UserPic} alt="userpic" className="h-12 w-12 rounded-full m-2 mr-0"></img>
                <div className='flex w-full'>
                    <textarea style={{ background: "#222433" }} type="" className=' mt-2.5 rounded-md flex-1 h-10 my-auto w-full mx-3 px-4 text-white outline-none' placeholder={ph} value={disc} name="id" onChange={e => setdisc(e.target.value)} ></textarea>
                </div>
            </div>
            <div className='relative'>
                <div className='h-fit w-fit ml-20 '>
                    <input className='mb-1' type="file" value={file} name="file" onChange={e => setfile(e.target.value)}></input>
                </div>
                {/* <Icon className='text-end my-auto text-3xl text-slate-400 mr-2' icon="ri:image-add-fill" />
                <Icon className='text-end my-auto text-3xl text-slate-400 mr-2' icon="akar-icons:link-chain" />
                <Icon className='text-end my-auto text-3xl text-slate-400 mr-3' icon="entypo:emoji-happy" /> */}
                <button className='bg-blue-700  rounded-md px-4 py-1 absolute right-6 bottom-1' onClick={upload}>Post</button>
                
            </div>
        </div>
    )
}

export default CreatePost