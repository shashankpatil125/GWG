import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import UserProfile from './components/userProfile/UserProfile';
import Tournaments from './components/navbar components/tournaments/Tournaments';
import Squads from './components/navbar components/Squads';
import Signup from './components/registration/Signup';
import Login from './components/sign in/Login';
import GameMoreInfo from './components/navbar components/tournaments/GameMoreInfo';
import Dashboard from './components/feed/Dashboard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signin" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/userprofile" element={<UserProfile/>}></Route>
          <Route path="/tournaments" element={<Tournaments/>}></Route>
          <Route path="/tournaments/:gname" element={<GameMoreInfo/>}></Route>
          <Route path="/squads" element={<Squads/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
