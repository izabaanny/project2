import React from 'react'
import RightSide from './rightside/RightSide'
import LeftSide from './leftside/LeftSide'
import './Signup.css'


function Signup() {
  return (
    <div className="signup-container">
      <div className="left-signup">
        <LeftSide />
      </div>
      <div className="right-signup">
        <RightSide />
      </div>
    </div>
  )
}

export default Signup
