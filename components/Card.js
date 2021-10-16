import Axios from "axios";
import React, { useEffect, useState } from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.card.picture.large} alt="" />
      </div>
      <div className="card__body">
        <h3 className="card__body-title">{props.card.name.first}</h3>
        <p className="card__body-content">{props.card.phone}</p>
        <p className="card__body-content">{props.card.email}</p>
        <p className="card__body-content">
          {props.card.location.city},{props.card.location.country}
        </p>
      </div>
    </div>
  );
}

export default Card;
