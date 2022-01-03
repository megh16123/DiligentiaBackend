
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import SearchPage from './components/SearchPage'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Switch>
        <Route path="/search/:searchterm">
        <div className="app-page">
      <Sidebar/>
      <SearchPage/>
      </div>
          </Route>
          <Route exact path="/">
             
      <div className="app-page">
      <Sidebar/>
      <Videos/>
      </div>
          </Route>
          
        </Switch>
      </Router>
     
      </div>


    
  );
}

export default App;
