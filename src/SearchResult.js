import React from 'react';
import './SearchResult.css' 
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return(
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon 
            className="searchResult_heart"/>

            <div className='searchResult_info'>

            

            <div className='searchResult_infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description}</p>
                </div>

            <div className='searchResult_infoBottom'>
            </div>
            </div>
        </div>
    )
}

export default SearchResult