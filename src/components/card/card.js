import React from "react";

import "./card.css";

const Card = ({ jobTitle, company, logo, location }) => {
  return (
    <div className="card">
      <div className="company-logo">
        <i className="fas fa-building fa-2x"></i>
      </div>
      <div className="job-title">
        <h3>{jobTitle}</h3>
      </div>
      <div className="company-name">{company}</div>
      <div className="company-location">
        <i className="fas fa-map-marker"></i>
        <label> {location}</label>
      </div>
    </div>
  );
};

export default Card;
