import React, {
  useState, useEffect,
} from 'react';

import { Header } from './components';
import { Language } from './components';

import './App.css';

const App = () => {
  // useState
  const [data, setCards] = useState([]);
  const [translatedCards, setTranslatedCards] = useState([]);
  // apiurl
  const APIurl = 'https://api.magicthegathering.io/v1/cards';
  // useEffect

  useEffect(() => fetch(APIurl).then((res) => res.json())
    .then((data) => {
      const tcs = data.cards.map((c) => {
        const tc = JSON.parse(JSON.stringify(c));
        if (c.foreignNames) {
          tc.name = c.foreignNames[1].name;
          tc.imageUrl = c.foreignNames[1].imageUrl;
        }
        return tc;
      });
      setCards(data.cards);
      setTranslatedCards(tcs);
    }),
  []);

  return (
    <div className="App ">
      <Header />
      <Language />
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
