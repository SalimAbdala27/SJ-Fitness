import React from 'react'
import Button from '../../components/Button/Button'
import "./landingPage.scss"
import ParticlesBg from 'particles-bg'
import { Link } from 'react-router-dom'


// add particle background 

const LandingPage = ({user, setUser}) => {
  return (
    <div className='landingPage'>
      <h1 className="landingPage__header">
        SJ
      </h1>
      <Link to={"/register"} className="landingPage__btn"><Button label={"Join Us"} className="landingPage__btn"/></Link>
      <div className="landingPage__back">
      <ParticlesBg type="cobweb" bg={true} color={
        "#222831"} />
      </div>
    </div>
  )
}

export default LandingPage