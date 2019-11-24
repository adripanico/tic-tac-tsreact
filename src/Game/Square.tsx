import React from 'react';
import { SquareProps } from './types';

export class Square extends React.Component<SquareProps, {}> {
  render() {
    const classNames = 'square' +
      (this.props.highlight ? ' highlight' : '') +
      (this.props.pointer && this.props.value === undefined ? ' clickable' : '');

    return (
      <button className={classNames} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
