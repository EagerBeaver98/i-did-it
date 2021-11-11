// import Header from './components/Header';
import {profile, tweets} from './data/temp data';
import Hello from './components/HelloWorld';
import UnderConstruction from './components/UnderConstruction';
import ProfilePage from './components/Profile';
import AddAlter from './components/AddAlter';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { useState } from 'react';
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Home from './components/Home';
import Diary from './components/Diary';


function App() {

  const [state, setState] = useState({profile: profile, alter: profile.alters[0].name, alterID: profile.alters[0].id, tweetList: tweets})
  function dateFormat(utcCode) {
    var date = new Date(utcCode);
  
    const month = date.toLocaleString('default', {month: "short"});
    const day = date.toLocaleString('default', {day: "numeric"})
    const year = date.toLocaleString('default', {year: "numeric"})
  
    return (day + " " + month + " " + year);
  }

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
          <li>
            <Link to="/diary">Diary</Link>
          </li>
        </ul>
      </nav>
      <div className="Profile">
        <ul className="Alters">
          <li>
            <DropdownButton id="alter-dropdown" title={state.alter}>
              {state.profile.alters.map(function(personality) {
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
          <Home dateFormat={dateFormat} tweets={state.tweetList}/>
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
        <Route path="/diary">
          <Diary dateFormat={dateFormat} state={state}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
