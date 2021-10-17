import React, { useState, useEffect } from "react";

import { Header, Language } from "./components";


import "./App.css";

const App = () => {
  // useState
  const [cards, setCards] = useState([]);
  const [translatedCards, setTranslatedCards] = useState([]);
  const [language, setLanguage] = useState(2);
  // apiurl
  const APIurl = "https://api.magicthegathering.io/v1/cards";
  //useEffect

  useEffect(
    () =>
      fetch(APIurl)
        .then((res) => res.json())
        .then((data) => {
          setCards(data.cards);
        }),
    []
  );

  useEffect(() => {
   
    const tcs = cards.map((c) => {
      const tc = JSON.parse(JSON.stringify(c));
      if (language === 8) {
        return tc
      }
      if (!!c.foreignNames) {
        tc.name = c.foreignNames[language].name;
        tc.imageUrl = c.foreignNames[language].imageUrl;
      }
      return tc;
    });
    setTranslatedCards(tcs);
  }, [cards, language]);

 

  return (
    <div className="App ">
      <Header />
     <Language setLanguage= { setLanguage }/>
      <div>
        {(translatedCards || []).map((item) => (
          <div>
            <h2>{item.name}</h2>
            <img alt={item.name} src={item.imageUrl} />
          </div>
        ))}
      </div>
    </div>
     
     
     
  );
};

export default App;
