import React from 'react';
import "./navbar.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
// add icons to perfect it 
const Navbar = (props) => {
  const {open, setOpen} = props;
  const openMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className='navbar'>
      <div className="navbar__left">
        SJ
      </div>
      <div className="navbar__right">
        <AiOutlineUser/>
        <GiHamburgerMenu onClick={openMenu}/>
      </div>
    </div>
  )
}

export default Navbar