import React from 'react';
import {BrowserRouter as Router, Switch,  Route, Link } from 'react-router-dom';
import PackageList from '../pages/PackageList.js'


const HostEntry = ({host}) => {
  
 const {name} = host

    return (
<div class="card-number">
<div>
<input className="checkbox-effect" id={name} type="checkbox"/>
<label for={name}>{name}</label>
</div>
</div>
  )
  
}

export default HostEntry;
