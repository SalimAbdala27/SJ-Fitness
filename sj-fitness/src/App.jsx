import './App.scss';
import Featurebar from './components/Featurebar/Featurebar';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import SlideOutMenu from './components/SlideOutMenu/SlideOutMenu'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from 'react';

// something to show how to add to homescreen

function App() {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
    <div className="App">
      <div className="App__top">
      <Navbar open={open} setOpen={setOpen}/>
      <Featurebar/>
      {open && <SlideOutMenu/> }
      </div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
