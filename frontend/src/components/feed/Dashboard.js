import Feed from './Feed'
import { createClient } from '@supabase/supabase-js'
import React, { useState, useEffect } from 'react'
import ComponentOtherInfo from './ComponentOtherInfo'
import ComponentPost from './ComponentPost'
import ComponentSearch from './CreatePost'
import Navbar from './Navbar'
import PostsArrAsProp from './PostsArrAsProp'
// import Posts from './Posts'
import UserInfo from './UserInfo'
import "/workspace/GWG/frontend/src/components/feed/feed.css"


function Dashboard() {

    // const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_API)

    // const [postArr, setPostArr] = useState()
    
    
    // var len
    
    // useEffect(() => {
    //     async function doit() {
    //         const { data, error } = await supabase
    //         .from('posts')
    //         .select()
    //         setPostArr(data);
    //     }   
    //     doit()
    // }, []);
    
    // console.log(postArr);           


    
    // console.log(postArr);    

    return (
        <div>
            {/* <Feed postarr={postArr} /> */}
            <Feed />
        </div>
    )
}

export default Dashboard