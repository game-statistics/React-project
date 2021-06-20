import React from 'react';
import './App.scss';
import Header from '../src/parts/other/Header';
import Footer from '../src/parts/other/Footer';
import Home from '../src/parts/homepage/Home';
// import PageAbout from '../src/parts/PageAbout';
import Allgames from '../src/parts/allgamespage/Allgames';
import Gamepage from '../src/parts/gamepage/Gamepage';
// import PageNotFound from '../src/parts/PageNotFound';
import ScrollToTop from '../src/parts/other/ScrolltoTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/games' exact component={Allgames} />
        {/* <Route path='/about' exact component={PageAbout} /> */}
        <Route path='/games/:id' exact component={Gamepage} />
        {/* <Route path='/' component={PageNotFound} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;