import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Contatti } from './components/Contatti';
import { Info } from './components/Info';
import { Home } from './pages/Home';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <div>
            Home
          </div>
        </Link>
        <Link to="/Contatti">
          <div>
            Contatti
          </div>
        </Link>
        <Link to="/Info">
          <div>
            Info
          </div>
        </Link>

        <Routes>
          <Route path='/' />
          <Route path='/Info' element={<Info />} />
          <Route path='/Contatti' element={<Contatti />} />
        </Routes>
      </BrowserRouter >
    </div>

  );
}

export default App;
