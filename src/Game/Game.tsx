import React from 'react';
import { Board } from './Board';
import './Game.scss';
import { GameHistoryRecord, GameState } from './types';

export class Game extends React.Component<{}, GameState> {
  private static getWinner(current: GameHistoryRecord) {
    const winnerLine = Game.getWinnerLine(current);
    if (winnerLine) {
      return current.squares[winnerLine[0]];
    }
    return null;
  }

  private static getWinnerLine(current: GameHistoryRecord) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (current.squares[a] && current.squares[a] === current.squares[b] && current.squares[b] === current.squares[c]) {
        return line;
      }
    }
    return undefined;
  }

  constructor(props = {}) {
    super(props);
    this.state = {
      currentMove: 0,
      history: [{
        clicked: undefined,
        squares: Array(9).fill(undefined),
      }],
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const current = this.state.history[this.state.currentMove];
    const squares = current.squares.slice();
    if (Game.getWinner(current) || !!squares[i]) {
      return;
    }
    const history = this.state.history.slice(0, this.state.currentMove + 1);
    history[this.state.currentMove].clicked = i;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      currentMove: this.state.currentMove + 1,
      history: history.concat({
        clicked: undefined,
        squares,
      }),
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(move: number) {
    this.setState({
      currentMove: move,
      xIsNext: move % 2 === 0,
    });
  }

  render() {
    const history = this.state.history.slice();
    const lastMove = history.length - 1;
    const winnerInLastMove = Game.getWinner(history[lastMove]);

    const getClickPositionHistoryRecord = (record: GameHistoryRecord) => {
      if (record.clicked === undefined) {
        return;
      }
      const turn = record.squares.filter(s => !!s).length % 2 === 0 ? 'X' : 'O';
      const row = Math.floor(record.clicked / 3);
      const col = record.clicked % 3;
      return `${turn} marked row ${row + 1}, column ${col + 1}`;
    };

    const moves = history.map((step, move) => {
      let movDesc = `#${move} `;
      if (move === 0 && this.state.currentMove !== 0) {
        movDesc += `Game started`;
      } else if (winnerInLastMove && move === lastMove) {
        movDesc += `Game ended with a victory for ${winnerInLastMove}`;
      } else if (!winnerInLastMove && move === 9) {
        movDesc += `Game ended with a draw`;
      } else if (move === this.state.currentMove) {
        movDesc += 'Current move';
      }

      const statusClassName = move !== this.state.currentMove ? 'enabled' : 'disabled';
      return (
        <li key={move}>
          <p className={statusClassName} onClick={() => this.jumpTo(move)}>
            {movDesc}
          </p>
          <p className="mov-row-col-desc">
            {getClickPositionHistoryRecord(history[move])}
          </p>
        </li>
      );
    });

    let status;
    const winnerInCurrentMove = Game.getWinner(history[this.state.currentMove]);
    if (winnerInCurrentMove) {
      status = `Game ended! ${winnerInCurrentMove} won!`;
    } else if (this.state.currentMove === 9) {
      status = `Game ended! It's a draw!`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <Board
          winnerLine={Game.getWinnerLine(history[this.state.currentMove])}
          squares={history[this.state.currentMove].squares}
          onClick={(i) => this.handleClick(i)}
        />
        <div className="game-info">
          <h3>{status}</h3>
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}
