import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import Missions from './Componenets/Mission';
import Nav from './Componenets/Nav';
import RocketList from './Componenets/RocketList';
import Profile from './Componenets/Profile';
import MissionList from './Componenets/MissionList';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <RocketList />
        </Route>
        <Route path="/missions">
          <MissionList />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
