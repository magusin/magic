import { Header } from './components'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
    state = {
      post: [],  
    }
    
 

async componentDidMount(){
    const url = 'https://api.magicthegathering.io/v1/cards/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({post: data.cards})
    
        
        
}


  render () {
  // const magic = this.state.post.map()
    return (
     
      <div className="App ">
         <Header />
         <div>
         {this.state.post.map((item) =>
       <div> <h2>{item.name}</h2> 
       <img src={item.imageUrl}></img>  </div>
      )} 
      </div>
      </div>
    );
   
  }

}

export default App;
