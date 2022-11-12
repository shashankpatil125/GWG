import { createClient } from '@supabase/supabase-js'
import React, { useState, useEffect } from 'react'
import ComponentPost from './ComponentPost'
import ComponentSearch from './CreatePost'
import Navbar from './Navbar'
import "./feed.css"


function Feed() {
  // UserInfo and ComponentSearch
  const userimg ='https://media.istockphoto.com/vectors/vector-illustration-young-gamer-sit-in-front-of-a-screen-and-playing-vector-id1313854295?k=20&m=1313854295&s=612x612&w=0&h=R0wkQHPMF9AkU_n4HYNlsB0nPZnTvQruMoae0Q_zlf0='
  const username ='User Name'
  const userid = '@userId'
  // const [userid, setuserid] = useState('@userId')


  // ComponentPost
  // const posterimg='https://i.insider.com/61d1c0e2aa741500193b2d18?width=1136&format=jpeg'
  // const postername ='Poster Name'
  // const postdisc = 'Peter always saw the world in black and white. There were two choices for every situation and you had to choose one of them. It was therefore terribly uncomfortable for him to spend time with Ashley.'
  // const postpic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-B5ineZkUzuOQuRY1PTsQJNKLyfsDW33R3o-7izFmL1gXyOI5RCobP-Unssvwn5Cl24&usqp=CAU'

  const supabase = createClient(process.env.REACT_APP_URL, process.env.REACT_APP_API)


  var [postArr, setPostArr] = useState(null)


  const [len, setLen] = useState(0)

  useEffect(() => {
    async function doit() {
      const { data } = await supabase
        .from('posts')
        .select()
      setPostArr(data.reverse());
      setLen(data.length)
      console.log(len);
      console.log("max");
    }
    doit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(postArr);

  

  localStorage.setItem('ProfilePic', '=')
  return <React.Fragment>{
    postArr !== null && (
      <div className='flex h-screen w-screen ' style={{ background: "#222433" }}>
        <Navbar UserPic={userimg} UserName={username} UserId={userid} />
        <div className='h-screen w-7/12 ml-56 overflow-auto  scroll-smooth  pt-14 example' style={{ background: "#222433" }} >
          <ComponentSearch UserPic={userimg} UserName={username} />
          {postArr.map((e, i) => <ComponentPost PosterImg="/image/user.jpeg" PosterName={e.userId} PostDisc={e.discription} key={i} />)}
        </div>
      </div>
    )}
  </React.Fragment>

}

export default Feed