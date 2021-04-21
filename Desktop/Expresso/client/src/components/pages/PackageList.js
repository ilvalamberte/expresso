import React, {useState} from 'react';
import { Link } from 'react-router-dom'


import Toggle from '../layout/Toggle.js'
import TablePackage from '../layout/TablePackage.js'
import Card from '../layout/Card.js'
import Navbar from '../layout/Navbar.js'
import Header from '../layout/Header.js'
import Package from '../layout/Package.js'

import RecycleImg from '../../imgs/recycling_2.png'
import { GrHostMaintenance } from 'react-icons/gr'
import { BsCloud } from 'react-icons/bs'
import { FcSearch } from 'react-icons/fc'
import { RiMenuUnfoldLine } from 'react-icons/ri'
import { FcFlowChart } from 'react-icons/fc'
import { FcDisclaimer } from 'react-icons/fc'
import { FcEnteringHeavenAlive } from 'react-icons/fc'
import { FcInTransit } from 'react-icons/fc'
import { FcTodoList } from 'react-icons/fc'
import { FcUpload } from 'react-icons/fc'
import { FcOk } from 'react-icons/fc'
import { FcExpired } from 'react-icons/fc'
import { FcFlashOn } from 'react-icons/fc'

import Modal from '../layout/Modal.js'

const PackageList = () => {
    return (
        <div>
     <Navbar />
<div className="page-content">
<Header/>
    <main>
        <div className="dash-cards">
        <Link to="/packages">
     <Card name="Packages" filter1="Available" filter2="Installed" filter3="Outdated" mainIcon={<FcTodoList/>} filter1icon={<FcOk/>}
     filter2icon={<FcUpload/>} filter3icon={<FcExpired/>}/>
        </Link>    
        <Link to="/dep">
     <Card name="Deployment" filter1="Success" filter2="Failed" filter3="Processing" mainIcon={<FcInTransit/>} filter1icon={<FcOk/>}
     filter2icon={<FcDisclaimer/>} filter3icon={<FcFlashOn/>} />
             </Link>   
        </div>
  
        
<TablePackage />

    </main>
</div>
        </div>
    )
}
export default PackageList