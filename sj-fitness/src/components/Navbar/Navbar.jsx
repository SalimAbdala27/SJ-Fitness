import React, { useEffect, useState } from 'react';
import "./navbar.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
// add icons to perfect it 
const Navbar = (props) => {
  const {open, setOpen, user} = props;
  const [firstLetter, setFirstLetter] = useState("")
  const [userFirstLetter, setUserfirstLetter] = useState("")
  const openMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  // const settingLetter = Array.from(user?.displayName)[0]
  // useEffect(() => {
  //   const check = () => {
  //     setFirstLetter(user?.displayName)
  //     console.log(firstLetter);
  //     setUserfirstLetter(Array.from(firstLetter)[0])
  //     console.log(userFirstLetter);
  //   }
  //   check()
  // });
  
  // fix first letter thing it comes undefined || just put an inital
  return (
    <div className='navbar'>
      <div className="navbar__left">
        <Link to={"/"} className="navbar__home">SJ</Link>
      </div>
      <div className="navbar__right">
        {user ?
            (<div className='usericon'>
                <p className='usericon__letter'>{user.displayName}</p>
            </div>)
            : <AiOutlineUser />
        }
        <GiHamburgerMenu onClick={openMenu}/>
      </div>
    </div>
  )
}

export default Navbar