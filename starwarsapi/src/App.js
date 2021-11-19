import './App.css';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import HeaderNav from './components/HeaderNav';
import People from './components/People';

function App() {

  
  return (
    <div className="App">
        <HeaderNav />
        <Routes>
          <Route path="/" element={ <People />}/>
        </Routes>
    </div>
  );
}

export default App;