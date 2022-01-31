
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

//import pages 

import Home from './Pages/Home';
import About from './Pages/About';
import Interests from './Pages/Interests';
import Work from './Pages/Work'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = '/'>
          <Home />
        </Route>
        <Route path = '/About'>
          <About />
        </Route>
        <Route path = '/Interests'>
          <Interests />
        </Route> 
        <Route path = '/Work'>
          <Work />
        </Route> 
      </Switch>
    </Router>
  )
}

export default App;
