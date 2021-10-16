import Axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Page from "./Page";

function Cards() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await Axios.get("https://randomuser.me/api?results=6");
        console.log(response.data.results);
        setCard(response.data.results);
      } catch (e) {
        console.log("somethins went wrong!!");
      }
    }
    fetchCards();
  }, []);

  return (
    <Page title="CardsPage">
      <section id="cards" >
        <div className="container1">
          {cards.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </div>
      </section>
    </Page>
  );
}

export default Cards;
