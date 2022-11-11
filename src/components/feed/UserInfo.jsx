import React from 'react'
import { Icon } from '@iconify/react';

function UserInfo(props) {
  return (
    <div className='h-full w-3/12 absolute top-1 right-1 mt-14 '>
      <div className='h-fit pb-5 bg-slate-900 m-2 mr-0 p-4 rounded-lg'>
      <div className='flex'>
        <img alt="max" className='h-20 w-20 rounded-full m-2 mb-3' src={props.UserPic}></img>
        <div className='grid justify-items-stretch w-full'>
          <Icon className='text-2xl text-gray-500  rounded-sm justify-self-end  mr-4 mt-3 ' icon="ant-design:edit-outlined" />
        </div>
      </div>
      <p className='text-white'>{props.UserName}</p>
      <p className='text-slate-400'>{props.UserId}</p>
      <div className='flex'>
        <p className='text-stone-500'>Ghost Level: </p>
        <p className='text-white ml-2'> 71</p>
      </div>
      <p className='text-stone-500 mt-4'>Frequently played games:</p>
      <button className='bg-amber-400 text-black rounded-md text-sm px-2 py-0.5 my-1 mx-1'>PUBG</button>
      <button className='bg-amber-400 text-black rounded-md text-sm px-2 py-0.5 my-1 mx-1'>Fall Guys</button>
      <button className='bg-amber-400 text-black rounded-md text-sm px-2 py-0.5 my-1 mx-1'>valorant</button>

      <div className='flex mt-4'>
        <Icon className='text-slate-400 text-xl' icon="ant-design:mail-outlined"></Icon>
        <p className='text-slate-300 text-sm ml-1'>username123@gmail.com</p>
      </div>

      <p className='text-stone-500 mt-3 mb-1'>Ghost Social Media:</p>
      <div className='flex'>
        <Icon className='text-slate-500 text-2xl mx-1' icon="akar-icons:instagram-fill" />
        <Icon className='text-slate-500 text-2xl mx-1' icon="ant-design:facebook-outlined" />
        <Icon className='text-slate-500 text-2xl mx-1' icon="fa-brands:twitter-square" />
      </div>

      </div>
      
    </div>











    // <div className=' w-72 h-screen pt-28 fixed ' style={{background:"#222433"}}>
    //   <img className='rounded-full w-36 h-36 mx-auto ' src={props.UserPic} ></img>
    //   <p className='text-center text-2xl mt-3 text-white'>{props.UserName}</p>
    //   <p className='text-center text-white mb-3'>{props.UserId}</p>

    //   <div style={{background:"#2b2d3d"}} className='flex mx-4 p-1 mb-2 text-gray-200 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-900  '>
    //     <Icon className='text-2xl ml-3 mr-3 my-auto' icon="carbon:user-avatar-filled-alt" />
    //     <Link className='text-lg my-auto' to="/userprofile">Profile</Link>
    //     {/* <button></button> */}
    //   </div>
    //   <div style={{background:"#2b2d3d"}} className='flex mx-4 p-1 mb-2 text-gray-200 rounded-lg  cursor-pointer hover:shadow-lg hover:shadow-gray-900'>
    //     <Icon className='text-2xl ml-3 mr-3 my-auto' icon="dashicons:groups" />
    //     <button className='text-lg my-auto'>Groups</button>

    //   </div>
    //   <div style={{background:"#2b2d3d"}} className='flex mx-4 p-1 mb-2 text-gray-200 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-900'>
    //     <Icon className='text-2xl ml-3 mr-3 my-auto' icon="ant-design:setting-twotone" />
    //     <button className='text-lg my-auto'>App setting</button>

    //   </div>
    //   <div style={{background:"#2b2d3d"}} className='flex mx-4 p-1 mb-2 text-gray-200 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-gray-900'>
    //     <Icon className='text-2xl ml-3 mr-3 my-auto' icon="codicon:feedback" />
    //     <button className='text-lg my-auto'>Help and Feedback </button>

    //   </div>

    // </div>
  )
}

export default UserInfo