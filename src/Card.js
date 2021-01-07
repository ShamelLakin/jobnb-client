import React from 'react'
import './Card.css'

function Card({src, title, description, phone_number}) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card_info">
               <h2>{title}</h2>
               <h4>{description}</h4> 
               <h3>{phone_number}</h3>
            </div>
        </div>
    )
}

export default Card