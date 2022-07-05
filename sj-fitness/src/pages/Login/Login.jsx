import React from "react";
import { useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import "./login.scss";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import Button from "../../components/Button/Button";

const Login = (props) => {
    const { user, setUser } = props;
    // forgot password is done Needs a loading thing and a modal to say check spam and wrong pass response etc... and adding a name to it too in the object done!!
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [resetPassword, setResetPassword] = useState(false);

    // const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    // made errors appear on screen
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            setErrorMessage("");
        } catch (error) {
            console.log(error.message);
            if (error.message === "Firebase: Error (auth/wrong-password).") {
                setErrorMessage("Wrong Password");
            } else if (
                error.message === "Firebase: Error (auth/user-not-found)."
            ) {
                setErrorMessage("User Not Found");
            }
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    const resetPass = async () => {
        try {
            const user = await sendPasswordResetEmail(auth, loginEmail);
            setResetPassword(true);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="login">
            <div className="login__container">
                <p className="login__heading">Login</p>
                <div className="login__inputField">
                    <p className="login__title">Email</p>
                    <div className="login__inputContainer">
                        <input
                            onChange={(event) =>
                                setLoginEmail(event.target.value)
                            }
                            className="login__inputContainer-input"
                        />
                        <div className="login__inputContainer-icons">
                            <MdOutlineMail className="login__inputContainer-icon" />
                        </div>
                    </div>
                    {errorMessage === "User Not Found" && 
                        <p className="login__inputContainer-error">{errorMessage}</p>
                    }
                </div>
                <div className="login__inputField-password">
                    <p className="login__title">Password</p>
                    <div className="login__inputContainer">
                        <input
                            onChange={(event) =>
                                setLoginPassword(event.target.value)
                            }
                            className="login__inputContainer-input"
                        />
                        <div className="login__inputContainer-icons">
                            <FiLock className="login__inputContainer-icon" />
                        </div>
                    </div>
                    {errorMessage === "Wrong Password" && 
                        <p className="login__inputContainer-error">{errorMessage}</p>
                    }
                </div>
                <p className="login__forgotPassword" onClick={resetPass}>
                    Forgotten Password?
                </p>
                <div className="login__buttonContainer">
                    <div className="login__login-Button" onClick={login}>
                        <Button label={"Login"} />
                    </div>
                    <Link to={"/register"} className="login__signUp-Button">
                        <Button label={"Sign Up"} />
                    </Link>
                </div>
                {/* <button onClick={logout}>Sign Out</button> */}
            </div>
            {resetPassword && <p>Check Spam folder</p>}
        </div>
    );
};

export default Login;

{
    /* <h4>User Logged In:</h4>
      <button onClick={logout}>Sign Out</button> */
}
{
    /* <Link to={"/register"}><button>Create and account</button></Link> */
}
{
    /* <p>{user?.displayName}</p>
      <p>{user?.email}</p> */
}
{
    /* <button onClick={login}>Login</button> */
}
{
    /* <button onClick={resetPass}>Reset Pass</button> */
}
