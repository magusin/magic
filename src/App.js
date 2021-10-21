import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Extension, Homepage } from "./components";
import React, { useState, useEffect } from "react";

import { callSets, fetchCards } from "./function";
import "./App.css";

const App = () => {
  const [sets, setSets] = useState([]);
  const [cards, setCards] = useState([]);
  const [translatedCards, setTranslatedCards] = useState([]);
  const [language, setLanguage] = useState(2);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCards().then((cards) => setCards(cards));
    callSets().then((data) => setSets(data.sets));
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
        {/* <Extension setSets={setSets} sets={sets} />  */}
        <Switch>
          <Route path="/home">
            <Homepage
              page={page}
              setPage={setPage}
              language={language}
              setLanguage={setLanguage}
              translatedCards={translatedCards}
            />
          </Route>
          <Route path="/sets">
            <Extension sets={sets} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
