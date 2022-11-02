import React from 'react'
import { Link } from 'react-router-dom';

function Eventcard(props) {

    var gname = props.name;
    var date = props.date;
    var time = props.time;
    var gid = props.gameId;
    // console.log(thumbnail);
    return (
        <div className='bg-black mx-1 rounded-lg p-3 mb-3'>
            <div className='w-full bg-stone-900 min-h-28 rounded-lg '>
                <img className='rounded-md' src={props.thumbnail} alt="thumnail"></img>
            </div>
            <p className='text-center text-white text-xl font-semibold mb-2.5 '>{gname}</p>

            <p className='text-center  text-white'>Date: {date}</p>
            <p className='text-center text-neutral-300 mb-1.5'>Time: {time}</p>


            <Link to={"/tournaments/"+gid}>
                <button className='w-full px-3 py-2 bg-amber-500 rounded-md font-semibold'>Register</button>
            </Link>
        </div>
    )
}

export default Eventcard