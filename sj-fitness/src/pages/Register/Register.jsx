import React from 'react'
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile} from "firebase/auth"
import { auth } from "../../firebase-config"
import "./register.scss"
import {
  Link,
} from "react-router-dom";
import Button from '../../components/Button/Button';

const Register = (props) => {
  const {user, setUser} = props
// forgot password is done Needs a loading thing and a modal to say check spam and wrong pass response etc... and adding a name to it too in the object done!!
// when logged in says welcome ... on the homepage
// required fields!!! ask J about icons in here needs to be done with backgrouds
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");
const [userName, setUserName] = useState("");


useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
}, [])

const register = async () => {
  try {
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      await updateProfile(user.user, {
        displayName: userName
      });
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  return (
    <div className="register">
      <div className='register__container'>
        <h3 className='register__container-header'>Sign Up</h3>
        <div className="register__container-form">
          <p className="register__container-form-labels">Name</p>
        <input className="register__container-form-input"onChange={(event) => setUserName(event.target.value)} required/>
        <p className="register__container-form-labels">Email</p>
        <input className="register__container-form-input" onChange={(event) => setRegisterEmail(event.target.value)} required/>
        <p className="register__container-form-labels">Password</p>
        <input className="register__container-form-input" onChange={(event) => setRegisterPassword(event.target.value)} required/>
      <Link className='register__login' to={"/login"}><p className='register__login-p' >Already a user? <span className='register__login-span' >LOGIN</span></p></Link>
      <button className='register__container-btn' onClick={register}>Sign Up</button>
        </div>
      </div>
  </div>
  );
}
export default Register