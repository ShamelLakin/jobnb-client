import React, { useState} from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search'

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search />}
            <Button onClick={() => 
            setShowSearch(!showSearch)}
            className='banner_searchButton' variant='outlined'>Search Dates</Button>
            </div>
           <div className='banner_info'>
              <h1>Use your resources</h1> 
              <h5>
                  plan. network. succeed.
              </h5>
              <Button variant='outlined'>Explore options</Button>
           </div>
        </div>
    )
}

export default Banner
