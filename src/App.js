import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'

import Home from './containers/Home'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/> 

        <Switch>
          <Route exact path= "/" render={props=>(<Home {...props}/>)}/>
          {/* <Route exact path= "/" render={props=>(<Home {...props}/>)}/> */}
        </Switch>   
      </div>
    </BrowserRouter>

  );
}

export default App;
