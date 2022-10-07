
import './App.css';
import Signin from './components/sign in/Signin';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import WrapReg from './components/registration/WrapReg';
import Feed from './components/feed/Feed';
import UserProfile from './components/userProfile/UserProfile';
import Navbar from './components/feed/Navbar';
import Tournaments from './components/navbar components/tournaments/Tournaments';
import Squads from './components/navbar components/Squads';
import Signup from './components/registration/Signup';
import Login from './components/sign in/Login';
import GameMoreInfo from './components/navbar components/tournaments/GameMoreInfo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Logo />}></Route> */}
          <Route path="/signin" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/feed" element={<Feed/>}></Route>
          <Route path="/userprofile" element={<UserProfile/>}></Route>
          <Route path="/tournaments" element={<Tournaments/>}></Route>
          <Route path="/tournaments/:gname" element={<GameMoreInfo/>}></Route>
          <Route path="/squads" element={<Squads/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
