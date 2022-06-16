import React from 'react'
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile} from "../node_modules/firebase/auth"
import { auth } from "./firebase-config"
import './App.scss';

const Login = () => {
// forgot password is done Needs a loading thing and a modal to say check spam and wrong pass response etc... and adding a name to it too in the object done!!
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [userName, setUserName] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [resetPassword, setResetPassword] = useState(false);

const [user, setUser] = useState({});

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
  
  
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        setErrorMessage("Wrong Password")
      } else if ( error.message === "Firebase: Error (auth/user-not-found)."){
        setErrorMessage("User Not Found")
      }
    }
  }
  
  const logout = async () => {
    await signOut(auth);
  }
  
  const resetPass = async () => {
    try {
      const user = await sendPasswordResetEmail(auth, loginEmail);
      setResetPassword(true)
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input placeholder='name' onChange={(event) => setUserName(event.target.value)}/>
        <input placeholder='email' onChange={(event) => setRegisterEmail(event.target.value)}/>
        <input placeholder='password' onChange={(event) => setRegisterPassword(event.target.value)}/>
      </div>
      <button onClick={register}>Create user</button>
      <div>
      <h3>Login User</h3>
        <input placeholder='email' onChange={(event) => setLoginEmail(event.target.value)}/>
        <input placeholder='password' onChange={(event) => setLoginPassword(event.target.value)}/>
      </div>
      <p>{errorMessage}</p>
      <button onClick={login}>Login</button>
      <button onClick={resetPass}>Reset Pass</button>
      {resetPassword && (
        <p>Check Spam folder</p>
        )}
      <h4>User Logged In:</h4>
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
      <button onClick={logout}>Sign Out</button>
  </div>
  );
}
export default Login