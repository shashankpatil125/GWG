
import './App.css';
import Signin from './components/sign in/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Registration from './components/registration/Registration';
import WrapReg from './components/registration/WrapReg';
import Feed from './components/feed/Feed';
import UserProfile from './components/userProfile/UserProfile';
import Navbar from './components/feed/Navbar';
import Tournaments from './components/navbar components/Tournaments';
import Squads from './components/navbar components/Squads';
import Signup from './components/registration/Signup';
import Login from './components/sign in/Login';

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
          <Route path="/squads" element={<Squads/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
