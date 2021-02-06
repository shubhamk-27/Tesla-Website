import React from 'react'
import './header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'

const header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={TeslaLogo} alt='Tesla Logo' />
            </div>

            <div className='header_centre'>
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
            </div>

            <div className='header_right'>
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    )
}

export default header
