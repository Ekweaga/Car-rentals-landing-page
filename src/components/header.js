import React from 'react'
import './header.css';
import img from '../images/0x0-ModelX_01.jpg'
import { useState,useEffect } from 'react';
import logo3 from '../icon-hamburger.svg';
import logo4 from '../icon-close.svg';
import logo from '../logo.svg'

function Header() {
  const [toggle,settoogle] = useState(false);
  const [close,setclose] = useState(true);
  const [open,setopen] = useState(false);
  const [screenwidth, setscreenwidth] = useState(window.innerWidth)
  const tooglenav=()=>{
    settoogle(true)
    setclose(false)
    setopen(true)
  }
  const toogleclose = ()=>{
    settoogle(false);
    setclose(true)
    setopen(false)
  }
  useEffect(()=>{
    const changewidth = ()=>{
      setscreenwidth(window.innerWidth)
    }
    window.addEventListener('resize',changewidth)
  },[])
  return (
    <div className='header'>
        <div className='header_logo'>
            <img src={logo}/>
            </div> 

            <nav className='header_center'>
            {(toggle || screenwidth > 500) &&(
              <ul>
              <li>Model 5</li>
                <li>Model 3</li>
                <li>Model X</li>
                <li>Model Y</li> 
                <li>Solar Roof</li>
                <li>Sola Panel</li>
                <li>Shop</li>
                <li>Tesla account</li>
              </ul>)
}
{close &&(<button className='ham' onClick={tooglenav}><img src={logo3} style={{width:'20px',height:'20px',cursor:'pointer'}}/></button>)}  
        {open &&(<button className='close' onClick={toogleclose}> <img src={logo4} style={{width:'20px',height:'20px',cursor:'pointer'}}/></button>)} 
            </nav>
           

    </div>
  )
}

export default  Header;