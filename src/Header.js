import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
    return (
        <div className='header'>
            <img
            className="header_icon"
            src="https://lh3.googleusercontent.com/qGC17mUnzVgPQ7LXCbfIuiM1pJzWZ2Ricm3NgfrWBtrXOaqhB8SMDaujzubmEQROJXeZ5wPaVNewEwpyFhyFWf-zjHj078U8Qv_oOZR6aVOg26ixjJxwHX0OMeU-yjxHre6EeWxeY-M=w2400"
            alt=""
            />

            <div className='header_center'>
            <input type="text" />
            <SearchIcon />
            </div>

            <div className='header_right'>
                <p>Become a Tech star</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
