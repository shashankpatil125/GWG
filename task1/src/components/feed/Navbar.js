import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo';



function Navbar(props) {
    const [userimg, setuserimg] = useState('https://media.istockphoto.com/vectors/vector-illustration-young-gamer-sit-in-front-of-a-screen-and-playing-vector-id1313854295?k=20&m=1313854295&s=612x612&w=0&h=R0wkQHPMF9AkU_n4HYNlsB0nPZnTvQruMoae0Q_zlf0=')
    const [visiblity, setVisiblity] = useState(false);
    function userInfoDisplay() {
        if (visiblity == false) {
            setVisiblity(true);
        }
        else if (visiblity == true) {
            setVisiblity(false);
        }

    }

    return (
        <div className='w-full h-16 bg-black flex justify-center fixed'>
            <div className='flex'>
                <button className='text-white mx-4 text-lg ml-12 '>Home</button>
                <button className='text-white mx-4 text-lg '>Teams</button>
                <button className='text-white mx-4 text-lg '>Tournaments</button>
                <button className='text-white mx-4 text-lg '>Notification</button>
            </div>
            <div className='flex w-full justify-end '>
                <button><input type="text" className='h-10 w-80 rounded-lg px-6 bg-gray-800' placeholder='Search post '></input></button>
                <button className='text-white mx-4 text-lg ' onClick={userInfoDisplay}>
                    <img src={userimg} className="h-12 w-12 rounded-full  mr-10"></img>
                </button>
                
            </div>

            {visiblity ? <UserInfo className="delay-500" UserPic={props.UserPic} UserName={props.UserName} UserId={props.UserId} /> : console.log("helo")}
        </div>
    )
}

export default Navbar