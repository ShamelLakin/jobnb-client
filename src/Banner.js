import React from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'

function Banner() {
    return (
        <div className='banner'>
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
