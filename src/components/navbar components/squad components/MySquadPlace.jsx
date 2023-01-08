import { Icon } from '@iconify/react';
import { createClient } from '@supabase/supabase-js';
import React, { useState } from 'react'
import MySquadThumbNail from './MySquadThumbNail';


function MySquadPlace() {

    var bool = true;
    const [visible, setvisible] = useState(false);
    const [squadName, setSquadName] = useState("");
    const [player1, setplayer1] = useState("");
    const [player2, setplayer2] = useState("");
    const [player3, setplayer3] = useState("");
    const [player4, setplayer4] = useState("");
    const [player5, setplayer5] = useState("");
    const [btnName,setBtnName] = useState("Create Squad")
    const [mysquad,setMySquad]=useState();

    const username=localStorage.getItem('username')
    const supabase = createClient(
        process.env.REACT_APP_URL,
        process.env.REACT_APP_API
    )

    async function checkExist(user) {
        const { data } = await supabase
            .from('users')
            .select('userId')
            .eq("userId", user)
        console.log(data);
        if (data.length === 0 && user !== "") {
            bool = false
            alert("user " + user + " does not exist")
        }  

    }


    async function postDataAtSquad() {
        const { data, error } = await supabase
            .from('squads')
            .insert([
                {
                    squadName: squadName,
                    player1: player1,
                    player2: player2,
                    player3: player3,
                    player4: player4,
                    player5: player5,
                }
            ])
            
            if(player1!==""){insertAtSquadMember(player1)}
            if(player2!==""){insertAtSquadMember(player2)}
            if(player3!==""){insertAtSquadMember(player3)}
            if(player4!==""){insertAtSquadMember(player4)}
            if(player5!==""){insertAtSquadMember(player5)}
            
            if(error==null){
                setBtnName("Squad Created")
            }

        console.log(error + " " + data);
    }

    async function insertAtSquadMember(player){
        await supabase
            .from('squadMembers')
            .insert([
                {
                    username:player,
                    squadName:squadName
                }
            ])
    }

    function trigger() {
        // checkExistSquad(squadName)&&
        checkExist(player1)
        checkExist(player2)
        checkExist(player3)
        checkExist(player4)
        checkExist(player5)
        setTimeout(() => {
            if (bool) {
                console.log(bool);
                postDataAtSquad()
            }
            console.log(1);
            bool = true
            console.log(bool);
        }, 3000);
    }

    async function getdetail(){
        const {data}=await supabase
        .from('squadMembers')
        .select('squadName')
        .eq('username', username)
        setMySquad(data)
    }
    getdetail()


    return (
        <div className='h-screen pt-16 overflow-scroll example p-3'>
            <div>
                <p className='text-white text-2xl font-semibold m-4'>Your Squads</p>
                <button onClick={() => setvisible(true)} className='bg-yellow-500 px-4 py-1.5 my-auto rounded-xl mb-3 flex'>
                    <Icon className='my-auto text-2xl font-bold' icon="fluent:add-12-filled" />
                    <p className='my-auto mx-2'>Create Your Squad</p>
                </button>
                {visible ? <div>
                    <input type="text" placeholder="Squad Name" className='text-center rounded-lg my-1 mx-2 w-full p-1 bg-white text-black' value={squadName} name="squadName" onChange={e => setSquadName(e.target.value)}></input><br />
                    <input type="text" placeholder="player 1" className='text-center rounded-lg my-1 mx-2 w-full p-1 bg-black text-white' value={player1} name="player1" onChange={e => setplayer1(e.target.value)}></input><br />
                    <input type="text" placeholder="player 2" className='text-center rounded-lg my-1 mx-2 w-full p-1 bg-black text-white' value={player2} name="player2" onChange={e => setplayer2(e.target.value)}></input><br />
                    <input type="text" placeholder="player 3" className='text-center rounded-lg my-1 mx-2 w-full p-1 bg-black text-white' value={player3} name="player3" onChange={e => setplayer3(e.target.value)}></input><br />
                    <input type="text" placeholder="player 4" className='text-center rounded-lg my-1 mx-2 w-full p-1 bg-black text-white' value={player4} name="player4" onChange={e => setplayer4(e.target.value)}></input><br />
                    <input type="text" placeholder="player 5" className='text-center rounded-lg my-1 mx-2 w-full p-1 bg-black text-white' value={player5} name="player5" onChange={e => setplayer5(e.target.value)}></input><br />
                    <button className='bg-yellow-500 rounded-lg w-full mx-2 p-2 font-semibold mt-3 mb-4' onClick={trigger}>{btnName}</button>
                </div> : null}

                {mysquad===undefined?null: mysquad.map((e, i) => <MySquadThumbNail name={e.squadName} key={i} />)}
                {/* <MySquadThumbNail /> */}
                {/* <MySquadThumbNail /> */}
            </div>
        </div>
    )
}

export default MySquadPlace