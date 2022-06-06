import React, { userRef, useState } from 'react'
import './signup.scss'; 
import { useAuth } from '../../contexts/AuthContext'

const Signup = () => {

    const emailRef = userRef();
    const passwordRef = userRef();
    const passwordConfirmationRef = userRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value === passwordConfirmationRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch {
            setError("Failed to create and account")
        }
        setLoading(false)
    }

    return (
        <>
        <div>
            <h2>Sign Up</h2>
            {error && <h2>{error}</h2>}
            <div className="signup__form">
                <form onSubmit={handleSubmit}>
                <div className='signup__form-email'>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" ref={emailRef} required />
                </div>
                <div className='signup__form-password'>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" ref={passwordRef} required />
                </div>
                <div className='signup__form-passwordConfirmation'>
                    <label for="passwordConfirmation">Password Confirmation:</label>
                    <input type="password" id="passwordConfirmation" name="passwordConfirmation"
                    ref={passwordConfirmationRef} required />
                </div>
                <button className="submitButton" type="submit" disabled={loading}>Sign up</button>
            </form>
            </div>
        </div>
            <div>Already have an account? Log in</div>
        </>   
    )
}

export default Signup