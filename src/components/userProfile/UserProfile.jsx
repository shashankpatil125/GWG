import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { createClient } from '@supabase/supabase-js'

function UserProfile() {
    const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_API)

    console.log(localStorage.getItem('usermail'));

    const[userInfo,setUserinfo]=useState({
        userMailId:'',
        userName:'',
        
        

    })

    useEffect(() => {

        async function doit(){
        const { data} = await supabase
        .from('users')
        .select()
        .eq('userEmail',localStorage.getItem('usermail'))
        console.log(data);
        setUserinfo({
            userName:data[0].userId,
            userMailId:data[0].userEmail
        })
        }
        doit()
    }, [])

    function discord(){
        
    }
    
    
    

    return (
        <div className='w-screen h-screen py-14 px-24 bg-no-repeat bg-cover ' style={{ backgroundImage: ` url(/image/new.jpg) ` }}>
            <div className='h-full w-2/5 rounded-2xl  ' >
                <div className='pt-6 pl-6 bg-gray-500 h-1/3 w-full rounded-t-2xl'>
                
                    <img className='  w-24 h-24 rounded-3xl ' alt="img" src={'https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg'}></img>
                    <div className='grid justify-items-stretch'>
                    <Icon className='text-2xl text-gray-800 bg-white rounded-sm justify-self-end mr-8  ' icon="ant-design:edit-outlined" />
                
                    </div>
                </div>
                <div className='bg-yellow-500 h-1/3 w-full py-3 px-5'>
                    <p className='text-2xl font-semibold'>{userInfo.userName}</p>
                    {/* <div className='flex'> */}
                    <p className='mr-5'>User Name</p>
                    <p>usermail12@gmail.com</p>
                    {/* </div> */}
                    <button className='bg-gray-500 my-2 mx-1 p-1 rounded-md' onClick={discord}>PUBG</button>
                    <button className='bg-gray-500 my-2 mx-1 p-1 rounded-md'>GTA5</button>
                    <button className='bg-gray-500 my-2 mx-1 p-1 rounded-md'>BGMI</button>
                </div>
                <div style={{ background: "#28334AFF" }} className=' rounded-b-2xl h-1/3 w-full pt-8 px-6 flex '>
                    <img alt="img" className='h-12 w-12 mr-3 rounded-lg' src="/image/insta.jpg "></img>
                    <img alt="img" className='h-12 w-12 mr-3' src="/image/facebook.png "></img>
                    <img alt="img" className='h-12 w-12 rounded-full' src="/image/discord.png "></img>
                </div>
                
            </div>
        </div>
    )
}

export default UserProfile