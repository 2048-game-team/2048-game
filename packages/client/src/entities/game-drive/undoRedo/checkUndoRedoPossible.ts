import { undoData, setUndoRedoPossible } from './model';

export const canUndo = () => undoData.index > 0;

export const canRedo = () =>
  undoData.records.length > 1 && undoData.index < undoData.records.length - 1;

export const checkUndoRedoPossible = () => {
  setUndoRedoPossible({ canUndo: canUndo(), canRedo: canRedo() });
};
