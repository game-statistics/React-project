import React from "react";
import "./App.css";
import Header from "./Parts/Header";
import Footer from "./Parts/Footer";
import Home from "./Parts/Home";
import Allgames from "./Parts/Allgames";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Games" exact component={Allgames} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;