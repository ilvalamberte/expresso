import React, {useState, useContext} from 'react';
import Deployment from '../layout/Deployment.js'

import PackageContext from '../../context/packageContext/packageContext.js'
import PackageState from '../../context/packageContext/packageState.js'


const TableDep = () => {


    const {jobs} = useContext(PackageContext);

    console.log({jobs})


    return (


<div class="flex-table">
        <div class="flex-table--header">
            <div class="flex-table--categories">
             
                <span>Name</span>
                <span>Version</span>
                <span>Host</span>
                <span>Date</span>
                <span>Status</span>
            </div>
        </div>
        <div class="flex-table--body">

        
{jobs.map(jobs => <Deployment jobs={jobs} key={jobs.name}/>)}
  
</div>
</div>

    )
} 
export default TableDep