import React, { useState } from 'react'
import dark from "/workspace/GWG/frontend/src/components/image/dark.jpg"
import light from '/workspace/GWG/frontend/src/components/image/light.jpg'
import google from '/workspace/GWG/frontend/src/components/image/google.png'
import fb from '/workspace/GWG/frontend/src/components/image/facebook.png'
import { Icon } from '@iconify/react';
import Lightground from './Lightground'
import Blackground from './Blackground'



localStorage.setItem('li','')  
localStorage.setItem("pass", '')       
function Signin() {
  
  const [b, setb] = useState(false)
  
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
      <button className='bg-white h-fit w-fit  absolute bottom-9 left-9 p-1 rounded-full' onClick={tof}><Icon className='text-5xl' icon="fluent:dark-theme-20-filled" /></button>
      {b ? <Lightground/> : <Blackground/>}

    </>
  )
}

export default Signin