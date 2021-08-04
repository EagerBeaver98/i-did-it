// import Header from './components/Header';
import Hello from './components/HelloWorld';
import UnderConstruction from './components/UnderConstruction';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Profile from './components/Profile';


function App() {
  return (
    <Router>
    <div className="App">
    <header>
      <nav>
        <ul className="HeaderItems">
          <li>
            <Link to="/">I DID It</Link>
          </li>
          <li>
            <Link to="/about">About DID</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
        </ul>
      </nav>
      <div className="Profile">
        <ul className="Alters">
          <li>Alter Name</li>
          <li>
            <Link to="/profile">Profile Name</Link>
          </li>
        </ul>
      </div>
    </header>
      <div className='seperator'></div>
      <Switch>
        <Route exact path="/">
          <UnderConstruction />
        </Route>
        <Route path="/about">
          <Hello />
        </Route>
        <Route path="/forum">
          <UnderConstruction />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
