// import Header from './components/Header';
import {profile} from './data/temp data';
import Hello from './components/HelloWorld';
import UnderConstruction from './components/UnderConstruction';
import ProfilePage from './components/Profile';
import AddAlter from './components/AddAlter';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { useState } from 'react';
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


function App() {

  const [state, setState] = useState({profile: profile, alter: profile.alters[0].name, alterID: profile.alters[0].id})

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
            <DropdownButton id="alter-dropdown" title={state.alter}>
              {profile.alters.map(function(personality) {
                return (<DropdownItem key={personality.id} onClick={() => {
                  setState({...state, alter: personality.name, alterID: personality.id});
                }} >{personality.name}</DropdownItem>)
              })}
            </DropdownButton>
          </li>
          <li>
            <Link to={`/profile/:${state.profile.id}`} >{profile.name}</Link>
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
        <Route path="/profile/:profileID">
          <ProfilePage alterID={state.alterID} currentAlter={state.alter} profile={state.profile}/>
        </Route>
        <Route path="/add_alter/:profileID">
          <AddAlter state={state} setState={setState} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
