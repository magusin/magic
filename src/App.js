import { Header } from "./components";
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./App.css";

const App = () => {
   // useState
  const [cards, setCards] = useState([]);
// apiurl
  const APIurl = "https://api.magicthegathering.io/v1/cards";
  //useEffect
   
      useEffect( () =>{
       return fetch(APIurl)
         .then(res => res.json())
         .then(data => setCards(data.cards));
      
      },[]);

    return (
      <div className="App ">
        <Header />
        <div>
          {cards.map((item) => (
            <div>
              <h2>{item.name}</h2>
              <img src={item.imageUrl}></img>
            </div>
          ))}
         
        </div>
      </div>
    );
}




export default App;
