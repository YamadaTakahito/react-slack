import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Top from './components/Top';
import About from './components/About';


function App() {
  return (
      <Router>
          <ul>
              <li><Link to="/">Top</Link></li>
              <li><Link to="/about/">About</Link></li>
          </ul>
          <Route path="/" exact component={Top} />
          <Route path="/about/" exact component={About} />
      </Router>
  );
}

export default App;