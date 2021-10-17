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
    const tcs = cards
      .map((c) => {
        const tc = JSON.parse(JSON.stringify(c));
        console.log(tc);
        if (language === 8) {
          return tc;
        }
        if (!!c.foreignNames) {
          tc.name = c.foreignNames[language].name;
          tc.imageUrl = c.foreignNames[language].imageUrl;
        }
        return tc;
      })
      .filter((c) => !!c.foreignNames);
    setTranslatedCards(tcs);
  }, [cards, language]);

  return (
    <div className="App ">
      <Header />
      <Language setLanguage={setLanguage} language={language} />
      <div class="d-flex flex-wrap align-items-end">
        {(translatedCards || []).map((item) => (
          <div className="p-2 card">
            <h2>{item.name}</h2>
            <img alt={item.name} src={item.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
