import { canUndo } from './checkUndoRedoPossible';
import { GameFlowChange } from './types';
import { gameFlowChange } from './common';

export const undo = () => {
  if (canUndo()) gameFlowChange(GameFlowChange.Undo);
};
