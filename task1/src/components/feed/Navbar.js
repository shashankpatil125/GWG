import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import UserInfo from './UserInfo';

import Web3Modal from "web3modal";
import {ethers} from "ethers"; 

//for connect metamask 
const provideOptions = {
    
}
//for connect metamask 

function Navbar(props) {

    //for connect metamask
    async function connectWallet(){
        try{
            let web3Modal=new Web3Modal({
                cacheProvider:false,
                provideOptions,
            });
            const web3ModalInstance = await web3Modal.connect();
            const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
            console.log(web3ModalProvider);
        }
        catch(error){
            console.error(error);
        }
    }


    const [userimg, setuserimg] = useState('https://media.istockphoto.com/vectors/vector-illustration-young-gamer-sit-in-front-of-a-screen-and-playing-vector-id1313854295?k=20&m=1313854295&s=612x612&w=0&h=R0wkQHPMF9AkU_n4HYNlsB0nPZnTvQruMoae0Q_zlf0=')
    const [visiblity, setVisiblity] = useState(false);
    function userInfoDisplay() {
        if (visiblity == false) {
            setVisiblity(true);
        }
        else if (visiblity == true) {
            setVisiblity(false);
        }
        console.log(visiblity);
    }

    return (
        <div className='w-full h-16 bg-black flex justify-center fixed'>
            <div className='flex'>
                <button className='text-white mx-4 text-lg ml-24 ' >Home</button>
                <button className='text-white mx-4 text-lg '>Teams</button>
                <button className='text-white mx-4 text-lg '>Tournaments</button>
                <button className='text-white mx-4 text-3xl '><Icon icon="bxs:bell" /></button>
            </div>
            <div className='flex w-full ml-64'>
                <button><input type="text" className='h-10 w-80 rounded-lg px-6 bg-gray-800' placeholder='Search post '></input></button>
                <button className='text-white mx-4 text-lg ' onClick={userInfoDisplay}>
                    <img src={userimg} className="h-12 w-12 rounded-full  "></img>
                </button>
                <button onClick={connectWallet} className="text-white text-3xl mr-10">
                <Icon icon="clarity:wallet-line" />
                </button>
            </div>

            {visiblity ? <UserInfo className="delay-500" UserPic={props.UserPic} UserName={props.UserName} UserId={props.UserId} /> : console.log("helo")}
        </div>
    )
}

export default Navbar