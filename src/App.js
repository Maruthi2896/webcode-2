import './App.css';
import Stackmain from './components/stackmain';
import Header from './components/header'
import { BrowserRouter as Router,Route,Switch ,Redirect} from'react-router-dom';
import AddQuestion from './components/AddQuestion';
import ViewQns from './components/ViewQuestion';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/> 

        <Switch>
        <Route  exact path='/' component={Stackmain}/>
        <Route   path='/add-question' component={AddQuestion}/>
        <Route   path='/question' component={ViewQns}/>
        </Switch>
      
     
      </Router>
  
 
   
   
    </div>
  );
}

export default App;
