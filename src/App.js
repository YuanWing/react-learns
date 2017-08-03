import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import List from './components/List/List';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/list" component={List} />
    </div>
  </Router>
);

export default App;