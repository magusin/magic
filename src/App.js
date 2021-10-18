import React, { useState, useEffect } from "react";

import { Header, Language } from "./components";

import "./App.css";

const fetchCards = async () => {
  const APIurl = "https://api.magicthegathering.io/v1/cards";
  let tabl = [];
  for (let i = 1; i < 10; i++) {
    let newCards = await fetch(APIurl + "?page=" + i + "&pageSize=100")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.cards);
        return data.cards;
      });
    tabl = tabl.concat(newCards);
  }
  console.log(tabl);
  return tabl;
}

const App = () => {
  // useState
  const [cards, setCards] = useState([]);
  const [translatedCards, setTranslatedCards] = useState([]);
  const [language, setLanguage] = useState(2);
  const [page, setPage] = useState(1);
  // apiurl
  // const [downloadPage, setDownloadPage ] =useState(1); 
  const APIurl = "https://api.magicthegathering.io/v1/cards";
  //useEffect

  useEffect(() => {
    fetchCards().then(cards => setCards(cards));
  }, []);

  useEffect(() => {
    const tcs = cards
      .filter((c, i) => !!c.foreignNames)
      .filter((c, i) => i < page * 21 && i >= (page - 1) * 21)
      .map((c) => {
        const tc = JSON.parse(JSON.stringify(c));
        if (language === 8) {
          return tc;
        }
        tc.name = c.foreignNames[language].name;
        tc.imageUrl = c.foreignNames[language].imageUrl;
        return tc;
      });
    setTranslatedCards(tcs);
  }, [cards, language, page]);

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
      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default App;
