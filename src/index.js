import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './global.css';
import Details from './pages/Details';
import HomePage from './pages/Homepage';
import Lineage from './pages/Lineage';
import Header from './components/Header';
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route path="/" component={HomePage} exact />
      <Route path="/Details" component={Details} exact />
      <Route path="/Lineage" component={Lineage} exact />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);