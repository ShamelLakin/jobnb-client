import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
          <div className='searchPage_info'>
              <p>interview dates • Jan 7 </p>
              <h1>Jobs Nearby</h1>
              
              <Button
              variant="outlined">Cancellation Flexability</Button> 
              <Button
              variant="outlined">Type of place</Button>
              <Button
              variant="outlined">price</Button>
              <Button
              variant="outlined">Rooms and beds</Button> 
              <Button
              variant="outlined">More Filters</Button> 
            </div> 
            <SearchResult
            img=""
            location="Tampa"
            title="Dev"
            description="Full-Stack"
            star={4.00}
            price="$100_000"
            total="awesome" />  
        </div>
    )
}

export default SearchPage
