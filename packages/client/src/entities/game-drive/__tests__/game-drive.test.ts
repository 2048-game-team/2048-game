import { createNewGame, setGame, makeMove } from 'entities/game-drive';
import { IGameData, GameStatus, Movements } from 'entities/game-drive/types';
import { $gameData, $gameStatus } from 'entities/game-drive/model';
import { it, expect, describe } from 'vitest';

export const testDimension = 3;
let gameData: IGameData;
let gameStatus: GameStatus;

$gameData?.watch(data => (gameData = data));
$gameStatus?.watch(data => (gameStatus = data));

export const compare = <T>(a: T, b: T) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

describe('game drive test', () => {
  it('Init board test', () => {
    createNewGame(testDimension, testDimension);
    const chipSum = gameData?.boardData.reduce(
      (sum, row) => sum + row.reduce((sum, col) => sum + col, 0),
      0
    );
    expect([4, 6, 8].includes(chipSum as number)).toEqual(true);
    expect(gameStatus).toEqual(GameStatus.OnGame);
  });

  it('Set board test', () => {
    const setRows = [];
    setRows.push([0, 0, 0]);
    setRows.push([0, 2, 0]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });

    for (let i = 0; i < testDimension; i++)
      expect(compare<number[]>(gameData?.boardData[i], setRows[i])).toEqual(
        true
      );
  });

  it('Try left movement', () => {
    makeMove(Movements.Left);
    expect(gameData.boardData[1][0]).toEqual(2);
  });

  it('Try right movement', () => {
    const setRows = [];
    setRows.push([0, 0, 0]);
    setRows.push([0, 2, 0]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Right);
    expect(gameData.boardData[1][2]).toEqual(2);
  });

  it('Try top movement', () => {
    const setRows = [];
    setRows.push([0, 0, 0]);
    setRows.push([0, 2, 0]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Top);
    expect(gameData.boardData[0][1]).toEqual(2);
  });

  it('Try bottom movement', () => {
    const setRows = [];
    setRows.push([0, 0, 0]);
    setRows.push([0, 2, 0]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Bottom);
    expect(gameData.boardData[2][1]).toEqual(2);
  });

  it('Test1 chips collapse', () => {
    const setRows = [];
    setRows.push([2, 0, 0]);
    setRows.push([2, 0, 0]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Top);
    expect(gameData.boardData[0][0]).toEqual(4);
  });

  it('Test2 chips collapse', () => {
    const setRows = [];
    setRows.push([2, 0, 0]);
    setRows.push([0, 0, 0]);
    setRows.push([2, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Top);
    expect(gameData.boardData[0][0]).toEqual(4);
  });

  it('Test3 chips collapse', () => {
    const setRows = [];
    setRows.push([2, 0, 0]);
    setRows.push([2, 0, 0]);
    setRows.push([2, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Top);
    expect(gameData.boardData[0][0]).toEqual(2);
    expect(gameData.boardData[1][0]).toEqual(4);
  });

  it('Test4 chips collapse', () => {
    const setRows = [];
    setRows.push([0, 0, 0]);
    setRows.push([4, 0, 4]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Right);
    expect(gameData.boardData[1][2]).toEqual(8);
  });

  it('Test5 chips collapse', () => {
    const setRows = [];
    setRows.push([0, 0, 16]);
    setRows.push([0, 0, 16]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Bottom);
    expect(gameData.boardData[2][2]).toEqual(32);
  });

  it('Test6 chips collapse, score test', () => {
    const setRows = [];
    setRows.push([0, 16, 16]);
    setRows.push([16, 0, 16]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Left);
    expect(gameData.boardData[0][0]).toEqual(32);
    expect(gameData.boardData[1][0]).toEqual(32);
    expect(gameData.score).toEqual(64);
  });

  it('Test on-game status', () => {
    const setRows = [];
    setRows.push([8, 2, 2]);
    setRows.push([16, 32, 1024]);
    setRows.push([8, 16, 2]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Bottom);
    expect(gameStatus).toEqual(GameStatus.OnGame);
  });

  it('Test win status', () => {
    const setRows = [];
    setRows.push([8, 8, 2]);
    setRows.push([16, 0, 1024]);
    setRows.push([0, 0, 1024]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Bottom);
    expect(gameStatus).toEqual(GameStatus.Win);
  });

  it('Test lost status', () => {
    const setRows = [];
    setRows.push([8, 16, 0]);
    setRows.push([16, 32, 1024]);
    setRows.push([8, 16, 2]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Bottom);
    expect(gameStatus).toEqual(GameStatus.Lost);
  });
});
