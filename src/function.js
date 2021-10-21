export function callSets() {
    
    return fetch("https://api.magicthegathering.io/v1/sets")
    .then(res => res.json())
    
}

export const fetchCards = async () => {
    const APIurl = "https://api.magicthegathering.io/v1/cards";
    let tabl = [];
    for (let i = 0; i < 2; i++) {
      await fetch(APIurl + "?page=" + i + "&pageSize=100")
        .then((res) => res.json())
        .then((data) => {
          tabl = tabl.concat(data.cards);
        });
    }
    return tabl;
  };

    