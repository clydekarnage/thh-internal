import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Forms from './pages/Forms';
import Touch from './pages/Touch';
import Motion from './pages/Motion';
import Virtual from './pages/Virtual';
import Mobile from './pages/Mobile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/forms" component={Forms} />
          <Route path="/touch" component={Touch} />
          <Route path="/motion" component={Motion} />
          <Route path="/virtual" component={Virtual} />
          <Route path="/mobile" component={Mobile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
