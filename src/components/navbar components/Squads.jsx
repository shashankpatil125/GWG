import { Icon } from '@iconify/react'
import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react'
import Navbar from '../feed/Navbar'
import MySquadPlace from './squad components/MySquadPlace'
import MySquadThumbNail from './squad components/MySquadThumbNail'
import SquadThubmNail from './squad components/SquadThubmNail'
import "/workspace/GWG/src/components/feed/feed.css"

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