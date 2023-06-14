import React from 'react'
import "./imag.css";
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import Piton from "../../images/7.svg"
import Disco from "../../images/8.svg"
import a3 from "../../images/9.svg"
import a4 from "../../images/10.svg"
function imag() {
  return (
    <div>
      <div className='Imag'>
        <h1 className='h11'>Trusted by employees of leading companies</h1>
        <img src={img5} alt="" />
        <div>
          <img src={img6} alt="" />
          <h1 className='h111'>Main Directions</h1>      
        </div>
        <div className='down'>
      <div className="box">
      <img src={Piton} alt="" />
      <h2>Python</h2>
      <p>Get started learning the most popular programming language in the world!</p>
      </div>
      <div className="box">
      <img src={Disco} alt="" />
        <h2>Data Science</h2>
        <p>Start building skills required for one of the hottest professions of our time!</p>
        </div>
        <div className="box">
      <img src={a3} alt="" />
      <h2>Data Analytics</h2>
        <p>Future proof your skills by learning applied analytics using Python!</p>
        </div>
        <div className="box">
      <img src={a4} alt="" />
        <h2>SQL</h2>
        <p>Get skills required for big data exploration!</p>
        </div>
        </div>
        <center><button className='btnstyle'>Start For Free
</button></center>
      </div>
    </div>
  )
}

export default imag