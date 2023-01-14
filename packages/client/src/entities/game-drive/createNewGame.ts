import { gameData, createEmpty2DArray } from './common';
import { insertNewNumber } from './insertNewNumber';
import { GameStatus } from './types';
import { setGameData, setGameStatus } from './model';

const defaultBoardSize = { rows: 4, cols: 4 };
const maxBoardSize = { rows: 40, cols: 40 };

export const createNewGame = (rowCount?: number, colCount?: number) => {
  rowCount = rowCount ?? defaultBoardSize.rows;
  colCount = colCount ?? defaultBoardSize.cols;
  const isInvalidBoardSize =
    rowCount <= 0 ||
    rowCount > maxBoardSize.rows ||
    colCount <= 0 ||
    colCount > maxBoardSize.cols;
  if (isInvalidBoardSize) throw new Error('Invalid board size');
  gameData.boardData = createEmpty2DArray(rowCount, colCount);
  gameData.score = 0;
  setGameStatus(GameStatus.OnGame);
  setGameData({ ...gameData });
  insertNewNumber();
  insertNewNumber();
};
