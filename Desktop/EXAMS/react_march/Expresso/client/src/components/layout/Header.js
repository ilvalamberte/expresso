import React from 'react';
import { FcSearch } from 'react-icons/fc'


const Header = () => {
    return(
    <header>
    <div className="search-wrapper">
            <span className="ti-search"><FcSearch /></span>
            <input type="search" placeholder="search"></input>
        </div>

    </header>
    )
}


export default Header;