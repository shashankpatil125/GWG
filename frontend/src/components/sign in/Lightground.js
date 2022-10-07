import React, { useState } from 'react'
import light from '/workspace/GWG/frontend/src/components/image/light.jpg'
import google from '/workspace/GWG/frontend/src/components/image/google.png'
import fb from '/workspace/GWG/frontend/src/components/image/facebook.png'
import { Link } from 'react-router-dom';


function Lightground() {

  const [li, setli] = useState(localStorage.getItem('li'));
  // setli('');
  const [pass, setpass] = useState(localStorage.getItem('pass'));
  // const temp=login;
  // setlogin('hello')
  // console.log(login)
  function catchInput(e) {
    setli(e.target.value);
    localStorage.setItem("li", li)
  }

  function catchpass(e) {
    setpass(e.target.value);
    localStorage.setItem("pass", pass)
  }
  return (
    <div className='w-screen h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${light})` }}>
      <div className="flex h-screen justify-center items-center">
        <div className="text-center ">
          <h1 className="font-font-mast text-5xl text-black mb-8">Sign in</h1>
          <p className=" mb-3 text-xl text-black">Sign in and get started</p>
          <div className='w-80'>
            <input type="text" placeholder='Login' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={li} name="li" onChange={catchInput} ></input>
            <br />
            <input type="Password" placeholder='Password' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={pass} name="pass" onChange={catchpass}></input>
            <div className='flex w-full relative'>
              <input type="checkbox" id="topping" name="topping" value="Paneer" className='mr-2' />
              <p className='text-gray-600'>Remember me</p>
              <p className='text-black  absolute right-0'>Forgot Password</p>
            </div>


            <button className="w-full mt-4 rounded-lg h-10 text-xl text-center bg-green-600">Login</button>
            <div className='flex justify-center mt-5 '>
              <img src={google} alt="google" className='w-10 rounded-full mx-2'></img>
              <img src={fb} alt="fb" className='w-10 rounded-full  mx-2'></img>
            </div>
            <div className='flex mb-12 mt-3 '>
              <p>Don't have an account?</p><Link to='/signup' className='ml-3 blur-1  text-purple-900 font-bold'> Sign up </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lightground
