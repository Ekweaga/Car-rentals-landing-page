import React from 'react'
import './header.css';
import img from '../images/0x0-ModelX_01.jpg'

function Header() {
  return (
    <div className='header'>
        <div className='header_logo'>
            <img src={img}/>
            </div> 

            <div className='header_center'>
                <p>Model 5</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p> 
                <p>Solar Roof</p>
                <p>Sola Panel</p>
            </div>
            <div className='header_right'>
                <p>Shop</p>
                <p>Tesla account</p>
            </div>

    </div>
  )
}

export default  Header;