export type SquareValue = string | undefined;

export interface SquareProps {
  readonly highlight: boolean;
  readonly onClick: () => void;
  readonly pointer: boolean;
  readonly value: string | undefined;
}

export interface GameHistoryRecord {
  squares: SquareValue[];
  clicked: number | undefined;
}

export interface IBoardProps {
  readonly squares: SquareValue[];
  readonly onClick: (i: number) => void;
  readonly winnerLine: number[] | undefined;
}

export interface GameState {
  currentMove: number;
  history: GameHistoryRecord[];
  xIsNext: boolean;
}
