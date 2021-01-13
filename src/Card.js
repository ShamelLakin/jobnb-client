import React from "react";
import "./Card.css";

function Card({ src, company, jobTitle, description, phone_number }) {
  return (
    <div className="card">
      <div className="image_wrapper">
        <img src={src} alt="" />
      </div>
      <div className="card_info">
        <h2>{company}</h2>
        <h3>{jobTitle}</h3>
        <h4>{description}</h4>
        <h3>{phone_number}</h3>
      </div>
    </div>
  );
}

export default Card;
