import React, { useState, useEffect } from 'react'
import Navbar from '../../feed/Navbar'
import Eventcard from './Eventcard'
import "/workspace/GWG/src/components/feed/feed.css"
import { createClient } from '@supabase/supabase-js'

function EventPlace() {
  const supabase = createClient(
    process.env.REACT_APP_URL,
    process.env.REACT_APP_API
  )
  const [arr, setarr] = useState();
  
  useEffect(() => {
    mappingTounaments()
    console.log(arr);
  },[]);

  
  async function mappingTounaments() {
    const { data } = await supabase
      .from('tournaments')
      .select()
    setarr(data)
  }
  console.log(arr);
  
  
  


  return (
    <div className='h-screen w-screen' style={{ background: "#222433" }}>
      <Navbar />
      <div className='ml-60 h-screen w-7/12 bg-slate-500 px-4 pt-16 overflow-scroll example border-l border-r border-neutral-600' style={{ background: "#222433" }} >
        <div className='w-full bg-black h-60 mt-3 rounded-lg'></div>
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2  mt-2    ">
          {/* {
            arr.forEach((item)=><Eventcard name={item.gameName} time={item.gameTime} date={item.gameDate} />)
          } */}
          {arr?.map((item)=><Eventcard name={item.gameName} time={item.gameTime} date={item.gameDate} key={item.id} thumbnail={item.thumbnail} gameId={item.game_Id} />)}

        </div>
      </div>
    </div>
  )
}

export default EventPlace