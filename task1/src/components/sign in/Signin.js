import React, { useState } from 'react'
import dark from "/workspace/ui/task1/src/components/image/dark.jpg"
import light from '/workspace/ui/task1/src/components/image/light.jpg'
import google from '/workspace/ui/task1/src/components/image/google.png'
import fb from '/workspace/ui/task1/src/components/image/facebook.png'
import { Icon } from '@iconify/react';

function background() {
  return (

    <div className='w-screen h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${dark})` }}>
      <div className="flex h-screen justify-center items-center">
        <div className="text-center ">
          <h1 className=" font-font-mast text-6xl text-white mb-8">Sign in</h1>
          <p className="text-white mb-3 text-2xl">Sign in and get started</p>
          <div className='w-80'>
            <input type="text" placeholder='Login' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" ></input>
            <br />
            <input type="Password" placeholder='Password' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900"></input>
            <div className='flex w-full relative'>
              <input type="checkbox" id="topping" name="topping" value="Paneer" className='mr-2 text-white' />
              <p className='text-white'>Remember me</p>
              <p className='text-green-400  absolute right-0'>Forgot Password</p>
            </div>

            <div className='flex justify-center mt-3'>
              <img src={google} alt="google" className='w-10 rounded-full mx-2'></img>
              <img src={fb} alt="fb" className='w-10 rounded-full  mx-2'></img>
            </div>


            <button className=" text-white w-full mt-4 rounded-lg h-10 text-xl text-center bg-green-600 mb-10 ">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function lightground() {
  return (
    <div className='w-screen h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${light})` }}>
      <div className="flex h-screen justify-center items-center">
        <div className="text-center ">
          <h1 className="font-font-mast text-6xl text-black mb-8">Sign in</h1>
          <p className=" mb-3 text-2xl text-black">Sign in and get started</p>
          <div className='w-80'>
            <input type="text" placeholder='Login' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" ></input>
            <br />
            <input type="Password" placeholder='Password' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900"></input>
            <div className='flex w-full relative'>
              <input type="checkbox" id="topping" name="topping" value="Paneer" className='mr-2' />
              <p className='text-gray-600'>Remember me</p>
              <p className='text-black  absolute right-0'>Forgot Password</p>
            </div>
            
            <div className='flex justify-center mt-3'>
              <img src={google} alt="google" className='w-10 rounded-full mx-2'></img>
              <img src={fb} alt="fb" className='w-10 rounded-full  mx-2'></img>
            </div>

            <button className="w-full mt-4 rounded-lg h-10 text-xl text-center bg-green-600 mb-10">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}


function Signin() {
  const [b, setb] = useState(true)

  function tof() {
    if (b === true) {
      setb(false)
    }
    else if (b === false) {
      setb(true)
    }
  }

  return (
    <>
      {/* <h>hello</h> */}
      <button className='bg-white h-fit w-fit absolute bottom-9 left-9 p-1 rounded-full' onClick={tof}><Icon className='text-5xl' icon="fluent:dark-theme-20-filled" /></button>
      {b ? lightground() : background()}

    </>
  )
}

export default Signin