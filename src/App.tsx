import React from 'react';
import './App.scss';
import { Game } from './Game/Game';

const App: React.FC = () => {
  return (
    <div>
      <h1>Tic Tac TSReact!</h1>

      <Game />
    </div>
  );
}

export default App;
