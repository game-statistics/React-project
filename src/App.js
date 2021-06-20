import React from 'react';
import './App.scss';
import Header from './parts/other/Header.js';
import Footer from './parts/other/Footer.js';
import Home from './parts/homepage/Home.js';
import PageAbout from './parts/PageAbout.js';
import Allgames from './parts/allgamespage/Allgames.js';
import Gamepage from './parts/gamepage/Gamepage.js';
import PageNotFound from './parts/PageNotFound.js';
import ScrollToTop from './parts/other/ScrolltoTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/games' exact component={Allgames} />
        <Route path='/PageAbout' exact component={PageAbout} />
        <Route path='/games/:id' exact component={Gamepage} />
        <Route path='/' component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;