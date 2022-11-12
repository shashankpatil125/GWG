import { createClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../feed/Navbar'
import SquadCrenditials from './SquadCrenditials';
// import userpic from '/workspace/GWG/frontend/src/components/image/user.jpeg'



function GameMoreInfo() {
  let { gname } = useParams();

  const supabase = createClient(
    process.env.REACT_APP_URL,
    process.env.REACT_APP_API
  )
  const [id, setid] = useState();
  const [time, settime] = useState();
  // const [date, setdate] = useState();
  const [thumbnail, setthumbnail] = useState();
  // const [name, setname] = useState();
  const [mode, setmode] = useState();
  
  const [playerId, setPlayerId] = useState('');

  async function search() {
    const { data } = await supabase
      .from('tournaments')
      .select('game_Id, gameName, thumbnail, gameTime, gameDate, mode')
      .eq("game_Id", gname)
    console.log(data);

    setid(data[0].game_Id)
    // setname(data[0].gameName)
    setthumbnail(data[0].thumbnail)
    settime(data[0].gameTime)
    // setdate(data[0].gameDate)
    setmode(data[0].mode)

  }

  async function individualApply(){
    
  }



  useEffect(() => {
    search()
    console.log("id " + id);
    console.log("time " + time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='h-screen w-screen' style={{ background: "#222433" }}>
      <Navbar />
      <div className='ml-60 h-screen w-7/12 bg-slate-500 px-4 pt-16 overflow-scroll example border-l border-r border-neutral-600' style={{ background: "#222433" }} >
        <div className='w-full bg-[#222433] h-fit mt-3 px-28 rounded-lg'>
          <img alt="max" className='rounded-lg' src={thumbnail}></img>
        </div>
        <div>
          <p className='font-semibold text-3xl mt-6 text-white text-center'>Register to the event</p>
        </div>
        {(mode === 'squad') ? <SquadCrenditials gid={id}/>
        
        :
          <div className='w-1/2 px-8 m-10 text-center mx-auto'>
            <p className='text-white text-xl mx-5 my-2'>Player UserId</p>
            <input type="text" placeholder="Player Name" className=' text-center rounded-lg my-1  w-full p-1 bg-black text-white' value={playerId} name="player5" onChange={e => setPlayerId(e.target.value)}></input><br />
            <button className='bg-yellow-500 py-2 px-4 w-1/2 mx-auto mt-3 rounded-xl font-semibold' onClick={individualApply}>Apply</button>
          </div>}

      </div>
    </div>

  )
}

export default GameMoreInfo