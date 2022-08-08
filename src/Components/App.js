import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import About from './About.js';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
          <Link to="/home">Home</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
