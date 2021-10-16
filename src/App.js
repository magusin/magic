import { Header } from "./components";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./App.css";

class App extends Component {
  state = {
    // mtg : [],
    post: [],
    card: [],
    
  };

  async componentDidMount() {
    const url = "https://api.magicthegathering.io/v1/cards?page=1&size=5";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.cards);
    this.setState({ post: data.cards });
    // console.log(data)
    var result = await data.cards.map((value) => {
      let card = JSON.parse(JSON.stringify(value));
      if (!!value.foreignNames) {
        console.log(value.foreignNames);
        card.name = value.foreignNames["1"].name;
        card.imageUrl = value.foreignNames["1"].imageUrl;
      }
      return card;
    });

    console.log(result);
    this.setState({ card: result });

    //  var result2 = result.forEach(function( index) {
    //     console.log( index);
    //   });
    //   console.log(result2.foreignNames[2])

    //  result2.forEach(function(item, index){
    //    console.log(item, index);
    //  })
    // var result2 = result.foreignNames.map(item => ({ value: item.value, text: item.text }));
    // console.log(result.foreignNames)

    //  const mtg = await require('mtgsdk')
    // const data2 = await mtg.json();
    // this.setState({ mtg: data2 })
    // console.log(mtg)
  }

  render() {
    return (
      <div className="App ">
        <Header />
        <div>
          {this.state.card.map((item) => (
            <div>
              {" "}
              <h2>{item.name}</h2>
              <img src={item.imageUrl}></img>
              {/* {item.foreignNames[2][name]} */}
            </div>
          ))}
          {/* {this.states.mtg.map()
.on('data', function (card) {
  <div>{card}</div>
})
}     */}
        </div>
      </div>
    );
  }
}

export default App;
