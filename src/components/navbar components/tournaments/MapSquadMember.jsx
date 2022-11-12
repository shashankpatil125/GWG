import React from 'react'

function MapSquadMember(props) {
  return (
    <div>
        {props.pname===""?null:
        <p className='text-white font-semibold my-1'>{props.pname}</p>
        }
    </div>
  )
}

export default MapSquadMember