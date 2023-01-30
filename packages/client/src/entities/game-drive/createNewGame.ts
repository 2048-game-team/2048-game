import { createEmpty2DArray } from './common';
import { insertNewNumber } from './insertNewNumber';
import { GameStatus } from './types';
import { gameData, setGameData, setGameStatus } from './model';
import { defaultGameSize, minGameSize, maxGameSize } from './const';
import { clearUndoData } from './undoRedo/clearUndoData';
import { makeGameSnapshot, undoInsert } from './undoRedo/common';

export const createNewGame = (rowCount?: number, colCount?: number) => {
  rowCount = rowCount ?? defaultGameSize;
  colCount = colCount ?? defaultGameSize;
  const isInvalidBoardSize =
    rowCount < minGameSize ||
    rowCount > maxGameSize ||
    colCount < minGameSize ||
    colCount > maxGameSize;
  if (isInvalidBoardSize) throw new Error('Invalid board size');
  clearUndoData();
  gameData.boardData = createEmpty2DArray(rowCount, colCount);
  gameData.score = 0;
  makeGameSnapshot();
  setGameStatus(GameStatus.OnGame);
  insertNewNumber();
  insertNewNumber();
  undoInsert();
  setGameData({ ...gameData });
};
