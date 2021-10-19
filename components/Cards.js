import Axios from "axios"
import React, { useEffect, useState } from "react"
import Card from "./Card"
import Page from "./Page"

function Cards() {
  const [cards, setCard] = useState([])

  useEffect(() => {
    // async function fetchCards() {
    //   try {
    //     const response = await Axios.get("https://randomuser.me/api?results=6")
    //     console.log(response.data.results)
    //     setCard(response.data.results)
    //   } catch (e) {
    //     console.log("somethins went wrong!!")
    //   }
    // }
    // fetchCards()

    fetch("https://randomuser.me/api?results=6")
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        console.log(response.results)
        setCard(response.results)
      }).catch(err=>{
        console.log('Something went wrong!')
      })
  }, [])

  return (
    <Page title="CardsPage">
      <section id="cards">
        {cards.map((card, index) => {
          return <Card card={card} key={index} />
        })}
      </section>
    </Page>
  )
}

export default Cards
