import { undoData, snapshotData, setUndoRedoPossible } from './model';

export const clearUndoData = () => {
  undoData.records = [];
  undoData.index = -1;
  snapshotData.boardData = [];
  snapshotData.score = 0;
  setUndoRedoPossible({ canUndo: false, canRedo: false });
};
