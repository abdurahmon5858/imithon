import React from 'react'
import './Card.css'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
function Card() {
  return (
    <div>
      <div className="card">
        <h1>Chosen by students and faculty</h1>
        <marquee direction="left"  ><img src={img3} alt="" /> <img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" />v<img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /> <img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /></marquee>
        <marquee className="marquee" direction="right"><img src={img3} alt="" /> <img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" />v<img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /> <img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /><img src={img3} alt="" /></marquee>
        <div className="cord_Child">

          <center><h1>
            Join Codefinity Community!
          </h1></center>
          <div className="fetch">
            <button className='bola'><h1 className='h18' style={{ color: "dodgerblue", fontWeight: "200", }}>50000+</h1>
            <h3 style={{color:"#fff"}}>Students</h3>
            

            </button>
            <button className='bola1'>
             
              <h1 className='h19' style={{ color: "dodgerblue", fontWeight: "200",}}>176</h1>
            <h3 style={{color:"#fff"}}>Countries</h3>
            
          
            </button>
            <button className='bola1'>
            <h1 className='h10' style={{ color: "dodgerblue", fontWeight: "200", }}>4300+</h1>
           <h3 style={{color:"#fff"}}>Code snippets submitted daily</h3>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card