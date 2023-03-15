import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import "./fontello/css/fontello.css"
import './App.css';

// Components
import Home from './components/Home/Home';
import Forms from './components/Forms/Forms';
import Summary from './components/Summary/Summary';

// images
import habiLogo from './images/habilogo.jpg';

function App() {

  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/"><img className='logo' src={habiLogo} alt='logoHabi' ></img></Link>
          <h1>cuentanos de tu hogar</h1>
        </header> 

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/forms' element={<Forms />} />
          <Route path='/resumen' element={<Summary />} />
        </Routes>
      </Router>
      
      <footer>
        <p>Copyright 2023 / prueba react - Santiago Guillen Ramirez</p>
      </footer>
    </div>
  );
}

export default App;
