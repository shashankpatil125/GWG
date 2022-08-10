
import './App.css';
import Signin from './components/sign in/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Registration from './components/registration/Registration';
import WrapReg from './components/registration/WrapReg';
import Feed from './components/feed/Feed';
import UserProfile from './components/userProfile/UserProfile';
import Navbar from './components/feed/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Logo />}></Route> */}
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<WrapReg/>}></Route>
          <Route path="/feed" element={<Feed/>}></Route>
          <Route path="/userprofile" element={<UserProfile/>}></Route>
          <Route path="/nav" element={<Navbar/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
