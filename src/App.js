
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route,Switch,Link } from 'react-router-dom';


const HatsPage=(props)=>(
  <div>
  
    <h1>Hats page</h1>
    </div>
);

function App() {
  return (
    <div> 
      <Switch>
      <Route  exact path='/'     component={HomePage}/>
      <Route  path='/hats' component={HatsPage}/> 
      </Switch>
    </div>
  );
}

export default App;
