import React from 'react';

import './App.css';

import PackageList from './components/pages/PackageList.js'
import Deployment from './components/pages/Deployment.js'
import Modal from './components/layout/Modal.js'
import Navbar from './components/layout/Navbar.js'
import MainEnv from './components/pages/MainEnv.js'
import MainHost from './components/pages/MainHost.js'


import TableDep from './components/layout/TableDep'

import TablePackage from './components/layout/TablePackage.js'



import PackageState from './context/packageContext/packageState.js'

import {BrowserRouter as Router, Switch,  Route } from 'react-router-dom';

function App() {
  return (
    <PackageState>
    <Router>
    <div className="App">


      
<Route path="/packages" component={PackageList} />  
      
<Route path="/dep" component={Deployment} />
      
<Route path="/modal" component={Modal} />

<Route path="/navbar" component={Navbar} />

<Route path="/mainEnv" component={MainEnv} />

<Route path="/mainHost" component={MainHost} />

<Route path="/tabledep" component={TableDep} />

<Route path="/tablepackage" component={TablePackage} />


    </div>
    </Router>
    </PackageState>
  );
}

export default App;
