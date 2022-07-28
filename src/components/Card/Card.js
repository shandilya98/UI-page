import React from "react";
import "./card.css";


export default function Card(props) {
  return (
    <div className="single-card">
      <img src={props.image} alt="error" />
      <div className="card-text-wraper">
        <div className="card-text-heading">The most promising mobile apps solution providers globally</div>
        <div className="card-text-content">We have been recognized as a market leader globally, post a rigorous evaluation of factors presence & client experience</div>
      </div>
    </div>
  );
}
