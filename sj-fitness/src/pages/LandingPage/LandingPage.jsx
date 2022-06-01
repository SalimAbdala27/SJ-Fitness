import React from 'react'
import Button from '../../components/Button/Button'
import "./landingPage.scss"
import ParticlesBg from 'particles-bg'


// add particle background 

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <h1 className="landingPage__header">
        SJ
      </h1>
      <Button label={"Join Us"}/>
      <div className="landingPage__back">
      <ParticlesBg type="cobweb" bg={true} />
      </div>
    </div>
  )
}

export default LandingPage