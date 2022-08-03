import React from 'react'
import userprofile from '/workspace/ui/task1/src/components/image/new.jpg'
import insta from '/workspace/ui/task1/src/components/image/insta.jpg'
import fb from '/workspace/ui/task1/src/components/image/facebook.png'
import discord from '/workspace/ui/task1/src/components/image/discord.png'
import { Icon } from '@iconify/react';

function UserProfile() {
    return (
        <div className='w-screen h-screen py-14 px-24 bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${userprofile})` }}>
            <div className='h-full w-2/5 rounded-2xl  ' >
                <div className='pt-6 pl-6 bg-gray-500 h-1/3 w-full rounded-t-2xl'>
                
                    {/* <img src={localStorage.getItem('ProfilePic')}></img> */}
                    <img className='  w-24 h-24 rounded-3xl ' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeq156jFRSOu4taqykolM4YfHXC31XmnDS-w&usqp=CAU' }></img>
                    <div className='grid justify-items-stretch'>
                    <Icon className='text-2xl text-gray-800 bg-white rounded-sm justify-self-end mr-8  ' icon="ant-design:edit-outlined" />
                
                    </div>
                </div>
                <div className='bg-yellow-500 h-1/3 w-full py-3 px-5'>
                    <p className='text-2xl font-semibold'>@username</p>
                    {/* <div className='flex'> */}
                    <p className='mr-5'>User Name</p>
                    <p>usermail12@gmail.com</p>
                    {/* </div> */}
                    <button className='bg-gray-500 my-2 mx-1 p-1 rounded-md'>PUBG</button>
                    <button className='bg-gray-500 my-2 mx-1 p-1 rounded-md'>GTA5</button>
                    <button className='bg-gray-500 my-2 mx-1 p-1 rounded-md'>BGMI</button>
                </div>
                <div style={{ background: "#28334AFF" }} className=' rounded-b-2xl h-1/3 w-full pt-8 px-6 flex '>
                    <img className='h-12 w-12 mr-3 rounded-lg' src={insta}></img>
                    <img className='h-12 w-12 mr-3' src={fb}></img>
                    <img className='h-12 w-12 rounded-full' src={discord}></img>
                </div>
                
            </div>
        </div>
    )
}

export default UserProfile