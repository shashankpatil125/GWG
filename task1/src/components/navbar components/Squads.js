import { Icon } from '@iconify/react'
import React from 'react'
import Navbar from '../feed/Navbar'
import MySquadThumbNail from './squad components/MySquadThumbNail'
import SquadThubmNail from './squad components/SquadThubmNail'
import "/workspace/ui/task1/src/components/feed/feed.css"

function Squads() {
    return (
        <div className='h-screen w-screen' style={{ background: "#222433" }}>
            <Navbar />
            <div className='flex'>
                <div className='ml-60 h-screen w-6/12 bg-slate-500 px-4 pt-16 overflow-scroll example border-l border-r border-neutral-600' style={{ background: "#222433" }} >
                    <p className='text-white text-2xl font-semibold m-4'>Global Squads</p>
                    <SquadThubmNail/>
                    <SquadThubmNail/>
                    <SquadThubmNail/>
                    <SquadThubmNail/>
                    <SquadThubmNail/>

                    
                </div>
                <div className='h-screen pt-16 overflow-scroll example p-3'>
                    <div>
                        <p className='text-white text-2xl font-semibold m-4'>Your Squads</p>
                        <button className='bg-yellow-500 px-4 py-1.5 my-auto rounded-xl mb-3 flex'>
                            <Icon className='my-auto text-2xl font-bold' icon="fluent:add-12-filled" />
                            <p className='my-auto mx-2'>Create Your Squad</p>
                        </button>
                        
                        <MySquadThumbNail/>
                        <MySquadThumbNail/>
                        <MySquadThumbNail/>
                        <MySquadThumbNail/>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Squads