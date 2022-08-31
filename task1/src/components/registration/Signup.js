import React, { useState } from 'react'
import google from '/workspace/ui/task1/src/components/image/google.png'
import fb from '/workspace/ui/task1/src/components/image/facebook.png'
import dark from "/workspace/ui/task1/src/components/image/dark.jpg"
import { Icon } from '@iconify/react';
import light from '/workspace/ui/task1/src/components/image/light.jpg'
import { createClient } from '@supabase/supabase-js'
import { Link } from 'react-router-dom';

function Signup() {
    const [bool, setbool] = useState(true)
    const [a, seta] = useState(`url(${dark})`)
    const [b, setb] = useState(" text-white ")
    const [c, setc] = useState(" text-gray-300 ")
    const [d, setd] = useState(" bg-yellow-500 ")
    const [t, sett] = useState('false')

    const [id, setid] = useState('');
    const [pass, setpass] = useState('');
    const [cpass, setcpass] = useState('');

    const supabase = createClient('https://ilmdokwizfwrxisiejiq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsbWRva3dpemZ3cnhpc2llamlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk5NTQwNTEsImV4cCI6MTk3NTUzMDA1MX0.55cyt865pWsMi3p5z5RoKLKICPGb5ehYeJJHtjGABG0')



    async function post(id, pass, cpass) {
        console.log(id, pass)

        if (pass != cpass) {
            alert("Enter confirm password again correctely ")
            setpass('');
            setcpass('');
        }
        else if (pass === cpass) {
            supabase.auth.signUp({
                email: id,
                password: pass,
                
            })
            
            
            setid('');
            setpass('');
            setcpass('');
            sett=true;
            console.log('t')
        }
        console.log(t)

    }

    function chenge() {
        if (bool === true) {
            setbool(false)
        }
        else if (bool === false) {
            setbool(true)
        }
        bool ? seta(`url(${light})`) : seta(`url(${dark})`)
        bool ? setb(" text-black ") : setb(" text-white ")
        bool ? setc(" text-gray-900 ") : setc(" text-gray-300 ")
        bool ? setd(" bg-green-600 ") : setd(" bg-yellow-500 ")
    }



    return (
        <div className={" w-screen h-screen bg-no-repeat bg-cover"} style={{ backgroundImage: (a) }}>
            <div className="flex h-screen justify-center items-center ">
                <div className="p-5 rounded-3xl text-center ">
                    <h1 className={" font-font-mast text-5xl " + (b) + " font-semibold mb-8"}>Sign up</h1>
                    <p className={(b) + " mb-3 text-xl w-80 "}>Sign up with email and password</p>
                    <div className='w-80 text-center'>
                        <input type="text" placeholder='Email id' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={id} name="id" onChange={e => setid(e.target.value)}  ></input>
                        {/* value={li} name="li" onChange={catchInput} */}
                        <br />
                        <input type="Password" placeholder='Create Password' className="mx-auto w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={pass} name="pass" onChange={e => setpass(e.target.value)}></input>
                        <br />
                        <input type="Password" placeholder='Confirm Password' className="mx-auto w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" value={cpass} name="cpass" onChange={e => setcpass(e.target.value)}></input>
                        <div className='flex w-full relative'>
                            <input type="checkbox" id="topping" name="topping" value="Paneer" className='mr-2 text-white' />
                            <p className={c}>Remember me</p>
                        </div>

                        <Link to={b?'/signin':'/signup'}><button className={" text-blue-900 font-semibold w-full mt-4 rounded-lg h-10 text-xl text-center" + (d)} onClick={() => (post(id, pass, cpass))}>Create account</button></Link>
                        <p className={(b) + " mt-3 mb-3 text-xl"}>Sign up with social media</p>
                        <div className='flex justify-center mt-5 '>
                            <img src={google} alt="google" className='w-10 rounded-full mx-2'></img>
                            <img src={fb} alt="fb" className='w-10 rounded-full  mx-2'></img>
                        </div>
                    </div>
                </div>
            </div>
            <button className='bg-white h-fit w-fit  absolute bottom-9 left-9 p-1 rounded-full' onClick={chenge}><Icon className='text-5xl' icon="fluent:dark-theme-20-filled" /></button>
        </div>
    )
}

export default Signup