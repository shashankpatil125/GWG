import { Icon } from '@iconify/react'
import React, { useState } from 'react'

var cr1=true;

function Dopost1 () {

    const [cr, setcr] = useState(false);

    function cancel() {
        if (cr === true) {
            setcr(false);
        }
        else if (cr === false) {
            setcr(true);
        }
        console.log(cr);
    }

    return cr?null:(
        <div className='absolute backdrop-blur-sm bg-white/ h-screen w-screen'>
            <div className="flex h-screen  justify-center items-center">
                <div className="text-center bg-black p-6 rounded-xl relative">
                    <div className='absolute right-4 top-4 text-white' onClick={cancel}>
                        <Icon icon="fluent-emoji-high-contrast:cross-mark" />
                    </div>
                    <h1 className=" font-font-mast text-5xl text-white mb-4">Create Post</h1>
                    <div className='w-96'>
                        <div className='w-full rounded-lg  text-lg px-6 py-3 mb-2 text-white bg-sky-900'>
                            <textarea type="text" rows="4" placeholder='Write here' className=" w-full rounded-lg  text-lg px-6 py-3 mb-2 text-white bg-black border-none hover:shadow-2xl transition-shadow delay-200 " ></textarea>
                            <div className='flex justify-center text-slate-300'>
                                <Icon className='text-3xl' icon="gridicons:add-image" />
                                <Icon className='text-3xl' icon="fluent:emoji-16-regular" />
                            </div>
                        </div>
                        <br />
                        <button className=" text-blue-900 font-semibold w-full  rounded-lg h-10 text-xl text-center bg-yellow-500  ">Post</button>
                        <div className='flex justify-center mt-5 '></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



function Temp() {
  return (
    <div className='bg-black w-screen h-screen'></div>
  )
}




export default cr1 ? Dopost1:Temp
// export default cr1 ? Temp:Dopost1