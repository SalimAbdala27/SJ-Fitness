import React from 'react'
import Button from '../../components/Button/Button'
import "./landingPage.scss"


// add particle background 

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <h1 className="landingPage__header">
        SJ
      </h1>
      <Button label={"Join Us"}/>
    </div>
  )
}

export default LandingPage