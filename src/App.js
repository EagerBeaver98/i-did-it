// import Header from './components/Header';
import {profile} from './data/temp data';
import Hello from './components/HelloWorld';
import UnderConstruction from './components/UnderConstruction';
import ProfilePage from './components/Profile';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { useState } from 'react';
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


function App() {

  const [alter, setAlter] = useState(profile.alters[0].name);

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
          <li>
            <DropdownButton id="alter-dropdown" title={alter}>
              {profile.alters.map(function(personality) {
                return (<DropdownItem key={personality.id} onClick={() => setAlter(personality.name)} >{personality.name}</DropdownItem>)
              })}
            </DropdownButton>
          </li>
          <li>
            <Link to="/profile">{profile.name}</Link>
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
          <ProfilePage profile={profile}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
