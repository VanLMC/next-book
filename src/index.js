import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './global.css';
import Details from './pages/Details';
import HomePage from './pages/Homepage';
import Lineage from './pages/Lineage';

ReactDOM.render(
    <React.StrictMode>
          <Router>
            <Route path="/" component={HomePage} exact/>
            <Route path="/Details" component={Details} exact/>
            <Route path="/Lineage" component={Lineage} exact/>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
