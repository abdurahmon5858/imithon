import React from 'react'
import './Navbar.css'
import img1 from '../../images/1.svg'
import { TbUsers } from 'react-icons/tb'

function Navbar() {
    return (
        <div>
            <div className="Navbar">
                <div className="navbar1">
                    <img src={img1} alt="" />
                    <ul>
                        <li>
                            <a href="">Pricing</a>
                        </li>
                        <li>
                            <a href="">Catalog</a>
                        </li>
                        <li>
                            <a href="">For Teams</a>
                        </li>
                        <TbUsers/>
                        <h2>
                            <a href="">Login</a>
                        </h2>
                        <button>Sigin up</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar