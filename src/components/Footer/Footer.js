import React from 'react'
import './Footer.css'
import Download from "../../images/download.jpg"
import imglarg from '../../images/1.svg'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer1">
                    <h1>Get started for free!</h1>
                    <div className="btn">
                        <button className='button btnn'> <img style={{ width: "30px" }} src={Download} alt="" /> Continue with Google</button>
                        <button className='btnnn'>Continue with Facebook</button>
                    </div>
                    <p>or sign up with email</p>
                    <button className='btc'>Start For Free</button>
                </div>
            </div>
            <div className="footer2">
                <img src={imglarg} alt="" />
                <div className="ft1">
                    <h2>Technologies</h2>
                    <p>Python</p>
                    <p>JavaScript</p>
                    <p>SQL</p>
                </div>
                <div className="ft2">
                    <h2>Company</h2>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className="ft3">
                    <h2>Address </h2>
                    <p>Ucode</p>
                    <p>Flori</p>
                    <p>Greg </p>
                </div>
            </div>
            <div className="ftn">
                <div className="ftn1">
                    <p>info@codefinity.com</p>
                </div>
                <div className="ftn2">
                    <p>Terms </p>
                </div>
                <div className="ftn3">
                    <p>Privacy</p>
                </div>
                <div className="ftn4">
                    <p>Cookie</p>
                </div>
                <div className="ftn5">
                    <p>Google</p>
                </div>
                <div className="ftn6">
                    <p>Subscription</p>
                </div>
                <div className="ftn7">
                    <p>Copyright    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer