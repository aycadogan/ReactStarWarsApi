import './App.css';
import HeaderNav from './components/HeaderNav';
import People from './components/People';

function App() {

  
  return (
    <div className="App">
      <div className="nav">
        <HeaderNav />
      </div>
      <div className="card-grid">
        <People />
      </div>
      
      
    </div>
  );
}

export default App;