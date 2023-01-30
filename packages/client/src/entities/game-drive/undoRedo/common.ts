import { gameData, setGameData } from '../model';
import { OneLine, Array2D } from '../types';
import { IUndoRecord, IUndoPoint, GameFlowChange } from './types';
import { snapshotData, undoData } from './model';
import { checkUndoRedoPossible } from './checkUndoRedoPossible';
import { createEmpty2DArray, getColCount, getRowCount } from '../common';

export const undoInsert = () => {
  const currentUndoDataRecords = undoData.records;
  if (undoData.index < undoData.records.length - 1)
    currentUndoDataRecords.splice(undoData.index + 1);
  const xorArrays = getXorArrays(snapshotData.boardData);
  currentUndoDataRecords.push(getUndoRecord(xorArrays));
  undoData.records = currentUndoDataRecords;
  undoData.index++;
  checkUndoRedoPossible();
};

export const makeGameSnapshot = () => {
  snapshotData.boardData = [];
  gameData.boardData.forEach((row: OneLine) =>
    snapshotData.boardData.push([...row])
  );
};

export const getXorArrays = (xorMatrix: Array2D): Array2D => {
  if (!xorMatrix.length) return gameData.boardData;
  return gameData.boardData.map((row: OneLine, rowIndex: number) =>
    row.map(
      (value: number, colIndex: number) => value ^ xorMatrix[rowIndex][colIndex]
    )
  );
};

const getUndoRecord = (xorArrays: Array2D): IUndoRecord => {
  const undoData = xorArrays.reduce(
    (acc: IUndoPoint[], row: OneLine, rowIndex: number) => [
      ...acc,
      ...row.reduce(
        (acc: IUndoPoint[], value: number, colIndex: number) =>
          value > 0
            ? [...acc, { row: rowIndex, col: colIndex, delta: value }]
            : [...acc],
        []
      ),
    ],
    []
  );
  const result: IUndoRecord = { data: undoData, score: gameData.score };
  return result;
};

export const getXorMatrix = (
  undoPoints: IUndoPoint[],
  rowCount: number,
  colCount: number
): Array2D => {
  const xorMatrix = createEmpty2DArray(rowCount, colCount);
  undoPoints.forEach(item => (xorMatrix[item.row][item.col] = item.delta));
  return xorMatrix;
};

export const gameFlowChange = (type: GameFlowChange) => {
  if (type === GameFlowChange.Redo) undoData.index++;
  const undoRecord = undoData.records[undoData.index];
  const xorMatrix = getXorMatrix(undoRecord.data, getRowCount(), getColCount());
  const restoreBoardData = getXorArrays(xorMatrix);
  if (type === GameFlowChange.Undo) undoData.index--;
  gameData.boardData = restoreBoardData;
  gameData.score = undoData.records[undoData.index].score;
  setGameData({ ...gameData });
  checkUndoRedoPossible();
};
