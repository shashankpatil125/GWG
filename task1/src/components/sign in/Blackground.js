import React, { useState } from 'react'
import dark from "/workspace/ui/task1/src/components/image/dark.jpg"
import light from '/workspace/ui/task1/src/components/image/light.jpg'
import google from '/workspace/ui/task1/src/components/image/google.png'
import fb from '/workspace/ui/task1/src/components/image/facebook.png'
import { Icon } from '@iconify/react';

function Blackground() {
  const [li, setli] = useState(localStorage.getItem('li'));
  const [pass, setpass] = useState(localStorage.getItem('pass'));

  function catchInput(e) {
    setli(e.target.value);
    localStorage.setItem("li", li)
  }

  function catchpass(e) {
    setpass(e.target.value);
    localStorage.setItem("pass", pass)
  }

  return (

    <div className='w-screen h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${dark})` }}>
      <div className="flex h-screen justify-center items-center">
        <div className="text-center ">
          <h1 className=" font-font-mast text-5xl text-white mb-8">Sign in</h1>
          <p className="text-white mb-3 text-xl">Sign in and get started</p>
          <div className='w-80'>
            <input type="text" placeholder='Login' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={li} name="li" onChange={catchInput} ></input>
            <br />
            <input type="Password" placeholder='Password' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={pass} name="pass" onChange={catchpass}></input>
            <div className='flex w-full relative'>
              <input type="checkbox" id="topping" name="topping" value="Paneer" className='mr-2 text-white' />
              <p className='text-white'>Remember me</p>
              <p className='text-yellow-400  absolute right-0'>Forgot Password</p>
            </div>



            <button className=" text-blue-900 font-semibold w-full mt-4 rounded-lg h-10 text-xl text-center bg-yellow-500  ">Login</button>
            <div className='flex justify-center mt-5 '>
              <img src={google} alt="google" className='w-10 rounded-full mx-2'></img>
              <img src={fb} alt="fb" className='w-10 rounded-full  mx-2'></img>
            </div>

            <div className='flex mb-12 mt-3 '>
              <p className='text-white'>Don't have an account?</p><p className='ml-3  text-yellow-400 transp blur-1 font-bold'> Sign up </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blackground