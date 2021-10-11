import Axios from "axios";
import React, { useEffect, useState } from "react";

function Card() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    try {
      Axios.get("https://randomuser.me/api?results=6").then((res) => {
        //  console.log(res.data.results)
        setCard(res.data.results);
      });
    } catch (e) {
      console.log("somethins went wrong!!");
    }
  }, []);

  return (
    <div className="container1">
      {cards.map((card , index) => {
        return (
          <div className="card" key={index}>
            <div className="card__img">
              <img src={card.picture.large} alt="" />
            </div>
            <div className="card__body">
              <h3 className="card__body-title">{card.name.first}</h3>
              <p className="card__body-content">{card.phone}</p>
              <p className="card__body-content">{card.email}</p>
              <p className="card__body-content">
                {card.location.city},{card.location.country}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
