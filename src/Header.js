import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img
            className="header_icon"
            src=""
            alt=""
            />

            <div className='header_center'>
            <input type="text" />
            <SearchIcon />
            </div>
        </div>
    )
}

export default Header
