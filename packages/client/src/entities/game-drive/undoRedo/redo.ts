import { canRedo } from './checkUndoRedoPossible';
import { GameFlowChange } from './types';
import { gameFlowChange } from './common';

export const redo = () => {
  if (canRedo()) gameFlowChange(GameFlowChange.Redo);
};
