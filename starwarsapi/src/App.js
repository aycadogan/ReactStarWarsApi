import './App.css';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import HeaderNav from './components/HeaderNav';
import People from './components/People';
import Planets from './components/Planets';
import Vehicles from './components/Vehicles';
import Starships from './components/Starships'

function App() {

  
  return (
    <div className="App">
        <HeaderNav />
        <Routes>
          <Route path="/" element={ <People />}/>
          <Route path="/planets" element={ <Planets />}/>
          <Route path="/vehicles" element={ <Vehicles />}/>
          <Route path="/starships" element={ <Starships />}/>

        </Routes>
    </div>
  );
}

export default App;