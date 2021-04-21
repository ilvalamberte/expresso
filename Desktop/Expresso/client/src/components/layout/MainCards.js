import React from 'react'
import {BrowserRouter as Router, Switch,  Route, Link } from 'react-router-dom';
import RecycleImg from '../../imgs/recycling_2.png'
import { GrHostMaintenance } from 'react-icons/gr'
import { BsCloud } from 'react-icons/bs'
import { FcSearch } from 'react-icons/fc'
import { RiMenuUnfoldLine } from 'react-icons/ri'
import { FcFlowChart } from 'react-icons/fc'
import { FcEnteringHeavenAlive } from 'react-icons/fc'

const MainCards = () => {

    return (
        
        <div className="dash-cards">

        <div class="card-single">
        <button className="snip1245">
        Environments
        <FcEnteringHeavenAlive className="iButton"/>
    </button>
  
            </div>
            
            <div class="card-single">
        <button className="snip1245">
        Hosts
        <FcFlowChart className="iButton"/>
    </button>
  
            </div>
        </div>
    )

}

export default MainCards