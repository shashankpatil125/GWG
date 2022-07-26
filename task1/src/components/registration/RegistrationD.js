import React from 'react'
import google from '/workspace/ui/task1/src/components/image/google.png'
import fb from '/workspace/ui/task1/src/components/image/facebook.png'
import dark from "/workspace/ui/task1/src/components/image/dark.jpg"

function RegistrationD() {
    return (
        // <div class="flex h-screen justify-center items-center bg-no-repeat bg-cover " style={{ backgroundImage: `url(${colorbackground})` }}>
        //     <div class="text-center bg-blue-400">
        //         <h1 class="text-3xl">Sign up with your email and password</h1>
        //         <input type="text" placeholder='Choose user id '></input>
        //         <br/>
        //         <input type="text" placeholder='Email id'></input>
        //         <br/>
        //         <input type="text" placeholder='New Password'></input>
        //         <br/>
        //         <button>Create Account</button>
        //         <p>Or sign up with your social media account</p>
        //         <div className='flex justify-center mt-5 '>
        //             <img src={google} alt="google" className='w-10 rounded-full mx-2'></img>
        //             <img src={fb} alt="fb" className='w-10 rounded-full  mx-2'></img>
        //         </div>
        //         <p class="text-xl">Sub text</p>
        //     </div>
        // </div>

        <div className='w-screen h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${dark})` }}>
            <div className="flex h-screen justify-center items-center">
                <div className="p-5 rounded-3xl text-center ">
                    <h1 className=" font-font-mast text-5xl text-white font-semibold mb-8">Sign up</h1>
                    <p className="text-white mb-3 text-xl w-80">Sign up with email and password</p>
                    <div className='w-80 text-center'>
                        <input type="text" placeholder='Choose user id' className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900"  ></input> 
                        {/* value={li} name="li" onChange={catchInput} */}
                        <br />
                        <input type="Password" placeholder='Email id' className="mx-auto w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900" ></input>
                        <br/>
                        <input type="Password" placeholder='Choose password' className="mx-auto w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900"></input>
                        <div className='flex w-full relative'>
                            <input type="checkbox" id="topping" name="topping" value="Paneer" className='mr-2 text-white' />
                            <p className='text-gray-300'>Remember me</p>
                        </div>

                        <button className=" text-blue-900 font-semibold w-full mt-4 rounded-lg h-10 text-xl text-center bg-yellow-500  ">Create account</button>
                        <p className="text-white mt-3 mb-3 text-xl">Sign up with social media</p>
                        <div className='flex justify-center mt-5 '>
                            <img src={google} alt="google" className='w-10 rounded-full mx-2'></img>
                            <img src={fb} alt="fb" className='w-10 rounded-full  mx-2'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationD