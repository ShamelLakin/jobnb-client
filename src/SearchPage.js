import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
      <div className="searchPage">
        <div className="searchPage_info">
          <p>Plan. Network. Succeed. </p>
          <h1>Job List</h1>

          {/* <Button
              variant="outlined">Cancellation Flexability</Button> 
              <Button
              variant="outlined">Type of place</Button>
              <Button
              variant="outlined">price</Button>
              <Button
              variant="outlined">Rooms and beds</Button> 
              <Button
              variant="outlined">More Filters</Button>  */}
        </div>
        <SearchResult
          img="https://cdn.vox-cdn.com/thumbor/H1DZ0R_44CsPJO8XZynMuAzdMfI=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10595581/jbareham_180405_1777_facebook_0003.jpg"
          location="Tampa, Fl"
          title="Web Developer Full-Time"
          description="Full-Stack"
          star={4.0}
          price="$100,000"
          total="awesome"
        />

        <SearchResult
          img="https://figma.imgix.net/5M2puKwSoznulyXdFOeDll/ff8bcf78b377a8af78877483fe8a02ba/Github_Case_Study_Header_New.png?&w=1060&auto=compress%2Cformat&crop=entropy&fit=crop&q=75"
          location="Tampa"
          title="Dev"
          description="Full-Stack"
          star={4.0}
          price="$100,000"
          total="awesome"
        />
      </div>
    );
}

export default SearchPage
