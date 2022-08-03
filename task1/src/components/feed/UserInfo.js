import React from 'react'
import { Icon } from '@iconify/react';
import {  Link  } from "react-router-dom";

function UserInfo(props) {
  return (
    <div className=' w-72 h-screen pt-10 fixed' style={{background:"#222433"}}>
      <img className='rounded-full w-36 h-36 mx-auto ' src={props.UserPic} ></img>
      <p className='text-center text-2xl mt-3 text-white'>{props.UserName}</p>
      <p className='text-center text-white mb-3'>{props.UserId}</p>

      <div style={{background:"#2b2d3d"}} className='flex mx-4 p-1 mb-2 text-gray-200 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-900  '>
        <Icon className='text-2xl ml-3 mr-3 my-auto' icon="carbon:user-avatar-filled-alt" />
        <Link className='text-lg my-auto' to="/userprofile">Profile</Link>
        {/* <button></button> */}
      </div>
      <div style={{background:"#2b2d3d"}} className='flex mx-4 p-1 mb-2 text-gray-200 rounded-lg  cursor-pointer hover:shadow-lg hover:shadow-gray-900'>
        <Icon className='text-2xl ml-3 mr-3 my-auto' icon="dashicons:groups" />
        <button className='text-lg my-auto'>Groups</button>

      </div>
      <div style={{background:"#2b2d3d"}} className='flex mx-4 p-1 mb-2 text-gray-200 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-900'>
        <Icon className='text-2xl ml-3 mr-3 my-auto' icon="ant-design:setting-twotone" />
        <button className='text-lg my-auto'>App setting</button>

      </div>
      <div style={{background:"#2b2d3d"}} className='flex mx-4 p-1 mb-2 text-gray-200 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-900'>
        <Icon className='text-2xl ml-3 mr-3 my-auto' icon="codicon:feedback" />
        <button className='text-lg my-auto'>Help and Feedback </button>

      </div>

    </div>
  )
}

export default UserInfo