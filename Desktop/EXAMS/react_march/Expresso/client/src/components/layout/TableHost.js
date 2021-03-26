import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom'

import HostEntry from './HostEntry.js'
import ZoneEntry from './ZoneEntry.js'
import PackageState from '../../context/packageContext/packageState.js'
import PackageContext from '../../context/packageContext/packageContext.js';

const TableHost = () => {

    const {hosts} = useContext(PackageContext);
    
    console.log({hosts});

    return (

        <form action="" class="card_select flex-table--body">
        <div class="form-header">
          <h4 class="title">Choose Hosts</h4>
        </div>
      
      
        <div class="form-body">
        
    {hosts.map(host => <HostEntry key={hosts.name} host={host}/>)}
      <Link to="/packages">
          <button type="submit" class="proceed-btn"><a href="#">Show Packages</a></button>
          </Link>
        </div>
       </form>

 
        
            )

            




}

export default TableHost;