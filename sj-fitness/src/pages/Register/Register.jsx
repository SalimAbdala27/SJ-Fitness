import React from 'react'
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile} from "firebase/auth"
import { auth } from "../../firebase-config"
import "./register.scss"
import Button from '../../components/Button/Button'
import {
  Link,
} from "react-router-dom";


const Register = (props) => {
  const {user, setUser} = props
// forgot password is done Needs a loading thing and a modal to say check spam and wrong pass response etc... and adding a name to it too in the object done!!
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");
const [userName, setUserName] = useState("");

// const [user, setUser] = useState({});

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
      <div>
        <h3>Register User</h3>
        <input placeholder='name' onChange={(event) => setUserName(event.target.value)}/>
        <input placeholder='email' onChange={(event) => setRegisterEmail(event.target.value)}/>
        <input placeholder='password' onChange={(event) => setRegisterPassword(event.target.value)}/>
      </div>
      <button onClick={register}>Create user</button>
      <Link to={"/login"}><Button label={"Login"}/></Link>
  </div>
  );
}
export default Register