import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from "firebase/auth"
import { auth } from "./firebase-config"
import './App.scss';

// forgot password needs doing and adding a name to it too in the object

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
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
    }
  }

  const logout = async () => {
    await signOut(auth);
  }
  return (
  <div className="App">
      <div>
        <h3>Register User</h3>
        <input placeholder='email' onChange={(event) => setRegisterEmail(event.target.value)}/>
        <input placeholder='password' onChange={(event) => setRegisterPassword(event.target.value)}/>
      </div>
      <button onClick={register}>Create user</button>
      <div>
      <h3>Login User</h3>
        <input placeholder='email' onChange={(event) => setLoginEmail(event.target.value)}/>
        <input placeholder='password' onChange={(event) => setLoginPassword(event.target.value)}/>
      </div>
      <button onClick={login}>Login</button>
      <h4>User Logged In:</h4>
      {user?.email}
      <button onClick={logout}>Sign Out</button>
  </div>
  );
}

export default App;
