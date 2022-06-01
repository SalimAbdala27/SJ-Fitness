import React from 'react';
import "./navbar.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
// add icons to perfect it 
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__left">
        SJ
      </div>
      <div className="navbar__right">
        <AiOutlineUser/>
        <GiHamburgerMenu/>
      </div>
    </div>
  )
}

export default Navbar