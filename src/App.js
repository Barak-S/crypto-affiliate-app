import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './containers/Home'
import Footer from './containers/Footer'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/> 

        <Switch>
          <Route exact path= "/" render={props=>(<Home {...props}/>)}/>
        </Switch>  
        <Footer/> 
      </div>
    </BrowserRouter>

  );
}

export default App;
