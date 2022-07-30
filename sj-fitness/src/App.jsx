import { useState, useEffect } from 'react';
import './App.scss';
import Featurebar from './components/Featurebar/Featurebar';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import SlideOutMenu from './components/SlideOutMenu/SlideOutMenu'
import Login from "./pages/Login/Login"
import Test from './pages/Test';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Register from './pages/Register/Register';
import WorkoutSplit from './components/WorkoutSplit/WorkoutSplit';

// something to show how to add to homescreen 
// IMPORTANT BEFORE PUBLISH CHANGE FIREBASE CONFIG into process.env file

function App() {
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <WorkoutSplit splitName={"Pull"} workouts={["Pull up", "Bicep curl"]}/>
    // <BrowserRouter>
    //     <div className="App">
    //         <div className="App__top">
    //         <Navbar open={open} setOpen={setOpen} user={user} setUser={setUser} />
    //         <Featurebar/>
    //         {open && <SlideOutMenu/> }
    //         </div>
    //         <Routes>
    //             <Route path="/" element={<LandingPage user={user} setUser={setUser}/>}/>
    //             <Route path="/register" element={<Register user={user} setUser={setUser}/>}/>
    //             <Route path="/test" element={<Test user={user} setUser={setUser}/>}/>
    //             <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
    //         </Routes>
    //     </div>
    // </BrowserRouter>
  );
}

export default App;
