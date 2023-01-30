import { transposeMatrix } from './common';
import { GameStatus, CellList } from './types';
import { gameData, setGameStatus } from './model';

export const insertNewNumber = () => {
  const newNumber = Math.random() < 0.9 ? 2 : 4;
  const freeCells = getFreeCells();
  if (freeCells.length > 0) {
    const randomCellIdx = getRandomInt(freeCells.length);
    gameData.boardData[freeCells[randomCellIdx].row][
      freeCells[randomCellIdx].col
    ] = newNumber;
  }
  if (freeCells.length <= 1) {
    if (noWayToMove()) setGameStatus(GameStatus.Lost);
  }
};

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const getFreeCells = (): CellList => {
  const res: CellList = [];
  gameData.boardData.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col === 0) res.push({ row: rowIndex, col: colIndex });
    });
  });
  return res;
};

const noWayToMove = (): boolean => {
  const horPossible = isCoupleInRow();
  transposeMatrix();
  const vertPossible = isCoupleInRow();
  transposeMatrix();
  return !horPossible && !vertPossible;
};

const isCoupleInRow = (): boolean => {
  return gameData.boardData.reduce((res, row) => {
    let prev = -1;
    return (
      res ||
      row.reduce((rowRes, value) => {
        const res = prev === value;
        prev = value;
        return rowRes || res;
      }, false)
    );
  }, false);
};
