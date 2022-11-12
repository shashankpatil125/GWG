import { createClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../feed/Navbar'



function GameMoreInfo() {
  let { gname } = useParams();
  // console.log(gname);

  const supabase = createClient(
    process.env.REACT_APP_URL,
    process.env.REACT_APP_API
  )
  const [id, setid]=useState();
  const [time, settime]=useState();
  // const [date, setdate]=useState();
  const [thumbnail, setthumbnail]=useState();
  // const [name, setname]=useState();
  
  async function search() {
    const { data } = await supabase
      .from('tournaments')
      .select('game_Id, gameName, thumbnail, gameTime, gameDate')
      .eq("game_Id", gname)
      console.log(data);
      
      setid(data[0].game_Id)
      // setname(data[0].gameName)
      setthumbnail(data[0].thumbnail)
      settime(data[0].gameTime)
      // setdate(data[0].gameDate)
  }
  
  useEffect(() => {
    search()
    console.log("id "+id);
    console.log("time "+time);
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className='h-screen w-screen' style={{ background: "#222433" }}>
      <Navbar />

      <div className='ml-60 h-screen w-7/12 bg-slate-500 px-4 pt-16 overflow-scroll example border-l border-r border-neutral-600' style={{ background: "#222433" }} >
        <div className='w-full bg-black h-fit mt-3 rounded-lg'>
        <img alt="max" className='rounded-lg' src={thumbnail}></img>
        </div>
        <div>
          <p className='font-semibold text-3xl mt-6 text-white'>Register to the event</p>
        </div>
      </div>
    </div>

  )
}

export default GameMoreInfo