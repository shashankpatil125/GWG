import { createClient } from '@supabase/supabase-js';
import React, { useState } from 'react'

function SquadCrenditials(props) {

  const [squadName, setSquadName] = useState('');
  const [doesExist, setDoesExist] = useState(false);
  const [cBtn, setCBtn] = useState(false);
  const [squadMember, setSquadMember] = useState();
//   const [showMember, setShowMember] = useState(false);
  const supabase = createClient(
    process.env.REACT_APP_URL,
    process.env.REACT_APP_API
  )
  async function getData() {
    setDoesExist(false)
    const { data } = await supabase
      .from('squads')
      .select('player1, player2, player3, player4, player5')
      .eq('squadName', squadName)
    setSquadMember(data[0]);
    // console.log(squadMember.player1);
    if (data.length === 0) {
      setDoesExist(true);
    }
    else {
      setCBtn(true)
    //   setShowMember(true)
    }
    // setShowMember(true)


  }

  async function register() {
    await supabase
      .from('registeredAsSquad')
      .insert(
        {
          'gameId': props.gid,
          'squadName': squadName,
          'soloUId':
            [
              squadMember.player1,
              squadMember.player2,
              squadMember.player3,
              squadMember.player4,
              squadMember.player5
            ]
        }
      )
      setSquadName('')
      setSquadMember('')


  }

  return (
    <div className='w-1/2 px-8 m-10 text-center mx-auto'>
      <p className='text-white text-xl mx-5 my-2'>Squad Name</p>
      <input type="text" placeholder="Squad Name" className=' text-center rounded-lg my-1  w-full p-1 bg-black text-white' value={squadName} name="player" onChange={e => setSquadName(e.target.value.trim())}></input><br />

      {doesExist ? <p className='text-red-700  '>Squad name dosen't exist</p> :

        <div className='bg-black rounded-lg'>
          {squadMember !== undefined ? <p className='font-semibold text-white pt-3 mx-8'>{squadMember.player1}</p> : null}
          {squadMember !== undefined ? <p className='font-semibold text-white'>{squadMember.player2}</p> : null}
          {squadMember !== undefined ? <p className='font-semibold text-white'>{squadMember.player3}</p> : null}
          {squadMember !== undefined ? <p className='font-semibold text-white'>{squadMember.player4}</p> : null}
          {squadMember !== undefined ? <p className='font-semibold text-white pb-3'>{squadMember.player5}</p> : null}
        </div>
      }

      {cBtn ? <button className='bg-yellow-500 py-2 px-1 w-1/2 mx-auto mt-3 rounded-xl font-semibold' onClick={register}>Confirm and Apply </button> :
        <button className='bg-yellow-500 py-2 px-4 w-1/2 mx-auto mt-3 rounded-xl font-semibold' onClick={getData}>Get details</button>}
    </div>
  )
}

export default SquadCrenditials