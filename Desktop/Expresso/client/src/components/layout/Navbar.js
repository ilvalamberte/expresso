import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'
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
import { FcUndo } from 'react-icons/fc'

import PackageContext from '../../context/packageContext/packageContext.js'

const Navbar = () => {

  const { navstate } = useContext(PackageContext);


  console.log({navstate})



const body = document.body;
const menuLinks = document.querySelectorAll(".admin-menu a");
const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
const collapsedClass = "collapsed";

const collapseFunc = (e) => {
    console.log(e.target.getAttribute("aria-expanded"));
    e.target.getAttribute("aria-expanded") == "true"
      ? e.target.setAttribute("aria-expanded", "false")
      : e.target.setAttribute("aria-expanded", "true");
    e.target.getAttribute("aria-label") == "collapse menu"
      ? e.target.setAttribute("aria-label", "expand menu")
      : e.target.setAttribute("aria-label", "collapse menu");
    body.classList.toggle(collapsedClass);
}
    return (
    
<header className="page-header">
<nav>

  <ul className="admin-menu">

  <li className="menu-heading centered-head">
  <img src={RecycleImg} className="iconsMenu" width="20px" height="20px"/>
      <h2 className="headingMarg">Expresso </h2>
    </li>

    <NavLink exact to="/mainEnv" activeClassName="menu-heading-active">
    <li className="menu-heading">
    <FcEnteringHeavenAlive className="iconsMenu"/>
      <h3>Environments</h3>
    </li>
    </NavLink>

    <NavLink exact to="/mainHost" activeClassName="menu-heading-active">
    <li className="menu-heading">
    <FcFlowChart className="iconsMenu"/>
      <h3>Hosts</h3>
    </li>
    </NavLink>

    <li>
      <button className="collapse-btn" aria-expanded="true" aria-label="collapse menu" onClick={(e) => collapseFunc(e)}>
      <FcUndo className="iconsMenu"/>
        <span>Collapse</span>
      </button>
    </li>
  </ul>
</nav>
</header>
    )
}

export default Navbar