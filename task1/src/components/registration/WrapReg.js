import React, { useState } from 'react'
import RegistrationD from './RegistrationD'
import RegistrationL from './RegistrationL'
import { Icon } from '@iconify/react';

function WrapReg() {
  
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
        {b ? <RegistrationL/> : <RegistrationD/>}
  
      </>
    )
  }
  
  export default WrapReg