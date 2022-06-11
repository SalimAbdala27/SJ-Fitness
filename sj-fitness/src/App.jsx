import './App.scss';
import Featurebar from './components/Featurebar/Featurebar';
import Navbar from './components/Navbar/Navbar';
import WorkoutSplit from './components/WorkoutSplit/WorkoutSplit';
import LandingPage from './pages/LandingPage/LandingPage';

// add react routing 

function App() {
  return (
    <div className="App">
      <div className="App__top">
      {/* <Navbar/> */}
      </div>
      <WorkoutSplit splitTitle="Push" openSplitDown={false} splitExercises={["Barbell rows", "Lat Pull down", "Pull ups", "Rear delt fly"]}/>
    </div>
  );
}

export default App;
