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
            img="https://lh3.googleusercontent.com/_OxMEv9NvKyr6q4Y3GIzET72bM_WwHk5qe6p49KKD2mX-xzKej04YMl-buAVUkxYXcILsjluA6Frvq-YjAr4jzD8cHo_MeBPZlUUuScVJeP0wb-n-cujgtqe2d2YpAKIAl_lrlBA9qU=w2400"
            location="Tampa, Fl"
            title="Web Developer Full-Time"
            description="Full-Stack"
            star={4.00}
            price="$100_000"
            total="awesome" />  

            <SearchResult
            img="https://lh3.googleusercontent.com/_OxMEv9NvKyr6q4Y3GIzET72bM_WwHk5qe6p49KKD2mX-xzKej04YMl-buAVUkxYXcILsjluA6Frvq-YjAr4jzD8cHo_MeBPZlUUuScVJeP0wb-n-cujgtqe2d2YpAKIAl_lrlBA9qU=w2400"
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
