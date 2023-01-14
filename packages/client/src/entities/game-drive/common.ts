import {
  IGameData,
  GameStatus,
  IMovementResult,
  Array2D,
  OneLine,
  ICollapsedData,
} from './types';
import { setGameData, setGameStatus } from './model';

export const gameData: IGameData = { boardData: [], score: 0 };

const winCreteria = 2048;

export const createEmpty2DArray = (
  rowCount: number,
  colCount: number
): Array2D => {
  return new Array(rowCount).fill(null).map(() => new Array(colCount).fill(0));
};

export const oneLineHandler = (line: OneLine): IMovementResult => {
  const lineLength = line.length;
  const withoutZeroLine = line.filter(item => item > 0);
  const collapsedLine = collapseEqualChips(withoutZeroLine);
  line = restoreLineLength(collapsedLine, lineLength);
  return { newLine: line };
};

const collapseEqualChips = (line: OneLine): OneLine => {
  let i = line.length - 1;
  while (i > 0) {
    if (isEqualChips(line, i)) {
      const collapse = makeCollapse(line, i);
      line = collapse.line;
      addToScore(collapse.newValue);
      if (collapse.newValue >= winCreteria) setGameStatus(GameStatus.Win);
      i--;
    }
    i--;
  }
  return line;
};

const isEqualChips = (line: OneLine, pos: number): boolean =>
  line[pos - 1] === line[pos];

const makeCollapse = (line: OneLine, pos: number): ICollapsedData => {
  line.splice(pos, 1);
  line[pos - 1] = 2 * line[pos - 1];
  return {
    line: line,
    newValue: line[pos - 1],
  };
};

const addToScore = (addValue: number) => {
  gameData.score += addValue;
  setGameData({ ...gameData });
};

const restoreLineLength = (line: OneLine, lineLength: number): OneLine => {
  return line.concat(new Array(lineLength - line.length).fill(0));
};

export const transposeMatrix = () => {
  const transposeRowCount = gameData.boardData[0].length;
  const transposeColCount = gameData.boardData.length;
  if (!transposeRowCount || !transposeColCount)
    throw new Error('Invalid matrix');
  const result = createEmpty2DArray(transposeRowCount, transposeColCount);
  gameData.boardData.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      result[colIndex][rowIndex] = value;
    });
  });
  gameData.boardData = result;
};
