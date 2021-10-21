import { fetchCards } from "../../function"
import React, { useState, useEffect } from "react";
import Language from "../language/Language";

const Homepage = () => {

  const [cards, setCards] = useState([]);
  const [translatedCards, setTranslatedCards] = useState([]);
  const [language, setLanguage] = useState(2);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCards().then((cards) => setCards(cards));
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
      <div>
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
  
export default Homepage;