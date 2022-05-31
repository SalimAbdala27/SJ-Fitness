import './App.scss';
import Featurebar from './components/Featurebar/Featurebar';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';

// add react routing 

function App() {
  return (
    <div className="App">
      <div className="App__top">
      <Navbar/>
      <Featurebar/>
      </div>
      <LandingPage/>
    </div>
  );
}

export default App;
