import React from 'react'
import './nav.css'
import { FaBitcoin } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";


const Nav = () => {
  return (
    <div className='navbar container'>
        <div className="main">
          <div className="lg"></div>
      <div><a href="#" className='logo'><FaBitcoin /></a></div>
     <h1><a href="#" className='coin'>Coins</a></h1>
     </div>

    <div className="aa">
        <div className="about">
            <h4><a href="#" className='text'>About! <AiOutlineArrowRight /></a></h4>
            <h4><a href="#" className='auth'>Auth coin <AiOutlineArrowRight /></a></h4>
        </div>
    </div>
    <div>
        <a href="" className='menu'><TfiMenuAlt /></a>
        </div>
    </div>
  )
}

export default Nav
