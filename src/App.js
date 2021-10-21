import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Extension, Homepage } from "./components";
import React, { useState, useEffect } from "react";

import { callSets, fetchCards } from "./function";
import "./App.css";

const App = () => {
  const [sets, setSets] = useState([]);
  const [cards, setCards] = useState([]);
  const [translatedCards, setTranslatedCards] = useState([]);
  const [language, setLanguage] = useState("French");
  const [page, setPage] = useState(1);
  const [extension, setExtension] = useState("");
  const [availableLanguages, setAvailableLanguages] = useState([]);
  useEffect(() => {
    fetchCards(extension).then((cards) => setCards(cards));
    callSets().then((data) => setSets(data.sets));
  }, [extension]);


  useEffect(() => {
    let availableLanguages = ["English"];
      cards.filter((c, i) => !!c.foreignNames)
      .filter((c, i) => i < page * 21 && i >= (page - 1) * 21)
      .forEach((c, i) => {
        for (let n in c.foreignNames) {
          if (availableLanguages.indexOf(c.foreignNames[n].language) === -1) {
            availableLanguages.push(c.foreignNames[n].language);
          }
        }
      });
console.log(availableLanguages);
      setAvailableLanguages(availableLanguages);
      
    
    const tcs = cards
      .filter((c, i) => !!c.foreignNames)
      .filter((c, i) => i < page * 21 && i >= (page - 1) * 21)
      .map((c) => {
        const tc = JSON.parse(JSON.stringify(c));
        if (language === "English") {
          return tc;
        }
        let languageIndex = 0;
        while (
          languageIndex < c.foreignNames.length &&
          c.foreignNames[languageIndex].language !== language
        ) {
          languageIndex++;
        }
        tc.name = c.foreignNames[languageIndex].name;
        tc.imageUrl = c.foreignNames[languageIndex].imageUrl;
        return tc;
      });
    setTranslatedCards(tcs);
  }, [cards, language, page]);

  return (
    <Router>
      <div className="App ">
        <Header />
        {/* <Extension setSets={setSets} sets={sets} />  */}
        <Switch>
          <Route path="/home">
            <Homepage
              page={page}
              setPage={setPage}
              language={language}
              setLanguage={setLanguage}
              translatedCards={translatedCards}
              availableLanguages={availableLanguages}
            />
          </Route>
          <Route path="/sets">
            <Extension sets={sets} setExtension={setExtension} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
