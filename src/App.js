import React from 'react';
import './App.scss';
import Header from './parts/other/Header';
import Footer from './parts/other/Footer';
import Home from './parts/homepage/Home';
import PageAbout from './parts/PageAbout';
import Allgames from './parts/allgamespage/Allgames';
import Gamepage from './parts/gamepage/Gamepage';
import PageNotFound from './parts/PageNotFound';
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
        <Route path='/about' exact component={PageAbout} />
        <Route path='/games/:id' exact component={Gamepage} />
        <Route path='/' component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;