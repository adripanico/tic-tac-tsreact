export type SquareValue = string | undefined;

export interface SquareProps {
  highlight: boolean;
  onClick: () => void;
  pointer: boolean;
  value: string | undefined;
}

export interface GameHistoryRecord {
  squares: SquareValue[];
  clicked: number | undefined;
}

export interface IBoardProps {
  squares: SquareValue[];
  onClick: (i: number) => void;
  winnerLine: number[] | undefined;
}

export interface GameState {
  currentMove: number;
  history: GameHistoryRecord[];
  xIsNext: boolean;
}
