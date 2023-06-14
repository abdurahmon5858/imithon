import React from 'react'
import "./Dom.css";
import Image from "../../images/planet.339267e6.svg"
import Home from "../../images/reaching-goals.29e81fd4.svg"
import Uy from "../../images/success-focus.91854912.svg"
import vidyo from '../../images/video.mp4'
import { BsCheckLg } from "react-icons/bs"
function Dom() {
    return (
        <div className='Dom'>
            <div className="dim">
                <div className="uy">
                    <img src={Image} alt="" />
                    <h2><BsCheckLg className='bs' />Access from anywhere</h2>
                    <h3>Run and submit code from your  browser - no installation required!</h3>
                </div>
                <div className="uy">
                    <img src={Home} alt="" />
                    <h2><BsCheckLg className='bs' />Bring your goals closer</h2>
                    <h3>Select from dozens of top-rated courses and hands-on projects!</h3>

                </div>
                <div className="uy">
                    <img src={Uy} alt="" />
                    <h2><BsCheckLg className='bs' />Focus on success</h2>
                    <h3>Follow step-by-step instructions designed by experts!</h3>
                </div>
            </div>
            <div className="colection">
                <h1>Edit and run code online</h1>
                <p>Submit interactive tasks and get instant error checking  </p>
                <video autoPlay loop src={vidyo}></video>
      

            </div>
        </div>
    )
}

export default Dom  