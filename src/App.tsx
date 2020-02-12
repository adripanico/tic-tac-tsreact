import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import './App.scss';
import { Game } from './Game/Game';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">TTT</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/">
            <h2>Tic Tac TSReact!</h2>
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
