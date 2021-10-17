import React, {
    useState, useEffect,
  } from 'react';

  const Language = () => {
    // useState
    const [translatedCards, setTranslatedCards] = useState([]);
    //url API
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
      setTranslatedCards(tcs);
    }),
  []);

  var lang = [];
  for (var i = 0; i < 6; i++) {
    lang.push(<div class="col">
       <div class="p-3 border bg-light">Row column</div>
     </div>)
  }

  return (
    <div class="container">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    { lang }
  </div>
</div>
  );

  };



  export default Language;