import React, { useState, useEffect } from "react";
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import { Header, Language, Extension } from "./components";

import "./App.css";
import { callSets, fetchCards } from "./function"





const App = () => {
  // useState
  const [cards, setCards] = useState([]);
  const [translatedCards, setTranslatedCards] = useState([]);
  const [language, setLanguage] = useState(2);
  const [page, setPage] = useState(1);
  const [sets, setSets] = useState([]);
  // apiurl
  // const [downloadPage, setDownloadPage ] =useState(1);
  // const APIurl = "https://api.magicthegathering.io/v1/cards";
  //useEffect

  useEffect(() => {
    fetchCards().then((cards) => setCards(cards));
    callSets().then(data => setSets(data.sets));
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
    <Router>
    <div className="App ">
      <Header />
      <Language setLanguage={setLanguage} language={language} />
      {/* <Extension setSets={setSets} sets={sets} />  */}
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
      
      <Switch>
      
        <Route path="/sets" component={Extension} sets={sets} />
      </Switch>
      
    </div>
    </Router>  
);
};

export default App;
