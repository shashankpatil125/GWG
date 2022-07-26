
import React from 'react'
import  '../feed/feed.css'
import Navbar from '../feed/Navbar'
import MySquadPlace from './squad components/MySquadPlace'
import SquadThubmNail from './squad components/SquadThubmNail'

function Squads() {
    return (
        <div className='h-screen w-screen' style={{ background: "#222433" }}>
            <Navbar />
            <div className='flex'>
                <div className='ml-60 h-screen w-6/12 bg-slate-500 px-4 pt-16 overflow-scroll example border-l border-r border-neutral-600' style={{ background: "#222433" }} >
                    <p className='text-white text-2xl font-semibold m-4'>Global Squads</p>
                    <SquadThubmNail />
                    <SquadThubmNail />
                    <SquadThubmNail />
                    <SquadThubmNail />
                    <SquadThubmNail />
                    
                </div>
                    <MySquadPlace/>
                
            </div>



        </div>
    )
}

export default Squads