import { oneLineHandler, transposeMatrix } from './common';
import { gameData, setGameData } from './model';
import { insertNewNumber } from './insertNewNumber';
import { Movements, IMovementResult } from './types';
import { makeGameSnapshot, undoInsert } from './undoRedo/common';

export const makeMove = (move: Movements) => {
  makeGameSnapshot();
  switch (move) {
    case Movements.Left:
      leftMoveProcess();
      break;
    case Movements.Top:
      topMoveProcess();
      break;
    case Movements.Right:
      rightMoveProcess();
      break;
    case Movements.Bottom:
      bottomMoveProcess();
      break;
  }
  insertNewNumber();
  setGameData({ ...gameData });
  undoInsert();
};

const leftMoveProcess = () => {
  gameData.boardData = gameData.boardData.map(row => {
    const result: IMovementResult = oneLineHandler(row);
    return result.newLine;
  });
};

const topMoveProcess = () => {
  transposeMatrix();
  leftMoveProcess();
  transposeMatrix();
};

const rightMoveProcess = () => {
  gameData.boardData = gameData.boardData.map(row => {
    const result: IMovementResult = oneLineHandler(row.reverse());
    return result.newLine.reverse();
  });
};

const bottomMoveProcess = () => {
  transposeMatrix();
  rightMoveProcess();
  transposeMatrix();
};
