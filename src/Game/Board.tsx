import React from 'react';
import { Square } from './Square';
import { IBoardProps } from './types';

export class Board extends React.Component<IBoardProps, {}> {
  renderSquare(i: number) {
    return (
      <Square
        highlight={this.props.winnerLine !== undefined && this.props.winnerLine.includes(i)}
        key={i}
        pointer={this.props.winnerLine === undefined}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="board">
        {Array(9).fill(0).map((s, i) => this.renderSquare(i))}
      </div>
    );
  }
}
