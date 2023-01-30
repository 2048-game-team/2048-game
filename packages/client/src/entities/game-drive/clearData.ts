import { setGame } from './setGame';
import { gameData } from './model';
import { clearUndoData } from './undoRedo/clearUndoData';

export const clearData = () => {
  gameData.boardData = [];
  gameData.score = 0;
  setGame({ ...gameData });
  clearUndoData();
};
