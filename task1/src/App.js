
import './App.css';
import Signin from './components/sign in/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Registration from './components/registration/Registration';
import WrapReg from './components/registration/WrapReg';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Logo />}></Route> */}
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<WrapReg/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
