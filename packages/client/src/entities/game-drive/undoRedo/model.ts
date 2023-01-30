import { createEvent, restore } from 'effector';
import { IUndoData, IUndoRedoPossible } from './types';
import { IGameData } from '../types';

export const undoData: IUndoData = { records: [], index: -1 };
export const snapshotData: IGameData = { boardData: [], score: 0 };
export const setUndoRedoPossible = createEvent<IUndoRedoPossible>();
export const $undoRedoPossible = restore(setUndoRedoPossible, {
  canUndo: false,
  canRedo: false,
});
