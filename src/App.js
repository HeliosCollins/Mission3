import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './Pages/Start.js';
import Vehicle from './Pages/Vehicle.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import LeasePage from './Pages/LeasePage.js'
import Driver from './Pages/Driver.js';
import Final from './Pages/Final.js';
import Thanks from './Pages/Thanks.js';
import TextInfo from './components/TextInfo.js';
import TextSaver from './components/TextSaver.js';
import Home from './Pages/Home.js';
import InsType from './Pages/InsType.js';

function App() {
  return (
    <Router>
      <div>
          <Route exact path = '/' component={Home}/>
          <Route path = '/InsType' component={InsType}/>
          <Route path = '/Start' component={Start}/>
          <Route path = '/Vehicle' component={Vehicle}/>
          <Route path = '/LeasePage' component={LeasePage}/>
          <Route path = '/Driver' component={Driver}/>
          <Route path = '/Final' component={Final}/>
          <Route path = '/Thanks' component={Thanks}/>
          <Route path = '/TextInfo' component={TextInfo}/>
          <Route path = '/TextSaver' component={TextSaver}/>
      </div>
    </Router>
  );
}

export default App;
