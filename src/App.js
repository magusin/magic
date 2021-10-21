import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import { Header, Extension, Homepage } from "./components";

import "./App.css";






const App = () => {

  return (
    <Router>
    <div className="App ">
      <Header />
      {/* <Extension setSets={setSets} sets={sets} />  */}
      <Switch>
      <Route path="/home" component={Homepage} />
        <Route path="/sets" component={Extension} />
      </Switch>
    </div>
    </Router>  
);
};

export default App;
