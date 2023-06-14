import React from 'react'
import './Main.css'
import Download from "../../images/download.jpg"
import { BsCheckLg } from "react-icons/bs"
function Main() {
  return (
    <div>
      <div className="main">
        <div className="main1">
          <div className="uka">
          <h1>LEVEL   UP   YOUR <br /> CODING SKILLS!</h1>
            <h2 className='h2'> <BsCheckLg className='bs' /> Learn from anywhere! No installation required</h2>
            <h2 className='h21'><BsCheckLg className='bs' /> Follow our guidance. Use step by step instructions</h2>
            <h2 className='h22'><BsCheckLg className='bs' /> Choose from 30+ top rated courses</h2>
            <h2 className='h23'><BsCheckLg className='bs' /> Join community of 50K+ learners</h2>

          </div>
          <br />
          <div className="btn">
            <button className='button'> <img style={{width: "30px"}} src={Download} alt="" /> Continue with Google</button>
            <button>Continue with Facebook</button>
          </div>
        </div>
        <div className="main2">

        </div>
      </div>
    </div>
  )
}

export default Main