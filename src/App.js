import React from 'react';
import './App.css';
import First from './components/first';
import Second from './components/second';
import { Route, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
      <Router>
        <div>
          <Route exact path="/">
            <h1>Welcome to the app</h1>
            </Route>
          <Route path="/first" component={First} />
          <Route path="/second" component={Second} />
        </div>
      </Router>
  );
}

export default App;
