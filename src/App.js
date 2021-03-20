import React from 'react';
import './App.css';
import Header from './Parts/Header';
import Footer from './Parts/Footer';
import Home from './Parts/Home';
import Allgames from './Parts/Allgames';
import Gamepage from './Parts/Gamepage';
import P404 from './Parts/P404.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/games' exact component={Allgames} />
        <Route path='/games/:id' exact component={Gamepage} />
        <Route path='/' component={P404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;