export function callSets() {
  return fetch("https://api.magicthegathering.io/v1/sets").then((res) =>
    res.json()
  );
}

export const fetchCards = async (extension) => {
  const APIurl = "https://api.magicthegathering.io/v1/cards";
  let tabl = [];
  for (let i = 0; i < 2; i++) {
    let newCards = [];
    let url = APIurl + "?page=" + i + "&pageSize=100";
    if (extension !== "") {
      url += "&setName=" + extension;
    }
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        newCards = data.cards;
      });
    tabl = tabl.concat(newCards);
  }
  return tabl;
};
