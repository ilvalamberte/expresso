import React , { useState, useContext } from 'react';
import PackageState from '../../context/packageContext/packageState.js';
import PackageContext from '../../context/packageContext/packageContext.js'
import Modal from '../layout/Modal.js';
import Package from '../layout/Package.js'


const TablePackage = () => {
    const {packages} = useContext(PackageContext);

    const outdatedPackages = packages.filter(packages => packages.outdated);

    return (


        <div class="flex-table">
                <div class="flex-table--header">
                    <div class="flex-table--categories">
                     
                        <span>Name</span>
                        <span>Version</span>
                        <span>Host</span>
                        <span>Date</span>
                       
                    </div>
                </div>
                <div class="flex-table--body">
        
                
                {packages.map(packages => <Package key={packages.zone} packages={packages}/>)}
          
        </div>
        </div>
        
            )
}
export default TablePackage