import React from 'react';
import "./navbar.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
// add icons to perfect it 
const Navbar = (props) => {
  const {open, setOpen, user} = props;
  const openMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className='navbar'>
      <div className="navbar__left">
        SJ
      </div>
      <div className="navbar__right">
        {user ? (
          <div className='usericon'><p className='usericon__letter'>{(user?.displayName).charAt(0)}</p></div>
        )  : <AiOutlineUser/>}
        <GiHamburgerMenu onClick={openMenu}/>
      </div>
    </div>
  )
}

export default Navbar