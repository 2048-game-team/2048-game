import { IGameData } from './types';
import { gameData, setGameData } from './model';
import { clearUndoData } from './undoRedo/clearUndoData';
import { undoInsert } from './undoRedo/common';

export const setGame = (data: IGameData) => {
  clearUndoData();
  gameData.boardData = data.boardData;
  gameData.score = data.score;
  undoInsert();
  setGameData(gameData);
};
