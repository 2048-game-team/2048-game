export interface IUndoPoint {
  row: number;
  col: number;
  delta: number;
}

export interface IUndoRecord {
  data: IUndoPoint[];
  score: number;
}

export interface IUndoData {
  records: IUndoRecord[];
  index: number;
}

export interface IUndoRedoPossible {
  canUndo: boolean;
  canRedo: boolean;
}

export enum GameFlowChange {
  Undo = 'undo',
  Redo = 'redo',
}
