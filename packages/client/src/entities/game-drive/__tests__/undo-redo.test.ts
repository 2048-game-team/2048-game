import { IUndoRedoPossible } from '../undoRedo/types';
import { $undoRedoPossible } from '../undoRedo/model';
import {
  gameData,
  createNewGame,
  setGame,
  makeMove,
  undo,
  redo,
} from 'entities/game-drive';
import { Movements } from 'entities/game-drive/types';
import { testDimension, compare } from './game-drive.test';
import { it, expect, describe } from 'vitest';

let undoRedoPossible: IUndoRedoPossible;
$undoRedoPossible?.watch(data => (undoRedoPossible = data));

describe("undo redo tests", () => {
  it('Undo/redo possibility test1', () => {
    createNewGame(testDimension, testDimension);
    expect(undoRedoPossible.canUndo).toEqual(false);
    expect(undoRedoPossible.canRedo).toEqual(false);
  });

  it('Undo/redo possibility test2', () => {
    makeMove(Movements.Left);
    expect(undoRedoPossible.canUndo).toEqual(true);
    expect(undoRedoPossible.canRedo).toEqual(false);
  });

  it('Undo/redo possibility test3', () => {
    undo();
    expect(undoRedoPossible.canUndo).toEqual(false);
    expect(undoRedoPossible.canRedo).toEqual(true);
  });

  it('Undo/redo possibility test4', () => {
    redo();
    expect(undoRedoPossible.canUndo).toEqual(true);
    expect(undoRedoPossible.canRedo).toEqual(false);
  });

  it('Undo/redo possibility test5', () => {
    undo();
    makeMove(Movements.Left);
    expect(undoRedoPossible.canUndo).toEqual(true);
    expect(undoRedoPossible.canRedo).toEqual(false);
  });

  it('Undo test1', () => {
    const setRows = [];
    setRows.push([0, 0, 0]);
    setRows.push([0, 2, 0]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Left);
    undo();
    expect(gameData.boardData[0]).toEqual([0, 0, 0]);
    expect(gameData.boardData[1]).toEqual([0, 2, 0]);
    expect(gameData.boardData[2]).toEqual([0, 0, 0]);
  });

  it('Undo test2', () => {
    const setRows = [];
    setRows.push([0, 0, 0]);
    setRows.push([0, 2, 0]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Left);
    makeMove(Movements.Top);
    undo();
    undo();
    expect(gameData.boardData[0]).toEqual([0, 0, 0]);
    expect(gameData.boardData[1]).toEqual([0, 2, 0]);
    expect(gameData.boardData[2]).toEqual([0, 0, 0]);
  });

  it('Undo test3', () => {
    const setRows = [];
    setRows.push([0, 0, 0]);
    setRows.push([0, 2, 0]);
    setRows.push([0, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Left);
    makeMove(Movements.Top);
    undo();
    undo();
    redo();
    undo();
    expect(gameData.boardData[0]).toEqual([0, 0, 0]);
    expect(gameData.boardData[1]).toEqual([0, 2, 0]);
    expect(gameData.boardData[2]).toEqual([0, 0, 0]);
  });

  it('Undo test3', () => {
    const setRows = [];
    setRows.push([0, 0, 0]);
    setRows.push([0, 2, 0]);
    setRows.push([2, 0, 0]);

    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Right);
    undo();
    expect(gameData.boardData[0]).toEqual([0, 0, 0]);
    expect(gameData.boardData[1]).toEqual([0, 2, 0]);
    expect(gameData.boardData[2]).toEqual([2, 0, 0]);
  });

  it('Redo test', () => {
    const setRows = [];
    setRows.push([0, 0, 0]);
    setRows.push([0, 2, 2]);
    setRows.push([0, 0, 0]);
    setGame({ boardData: setRows, score: 0 });
    makeMove(Movements.Left);
    const newGameData = { ...gameData };
    undo();

    redo();
    expect(compare(gameData.boardData, newGameData.boardData)).toEqual(true);
    expect(gameData.score).toEqual(newGameData.score);

    redo();
    expect(compare(gameData.boardData, newGameData.boardData)).toEqual(true);
    expect(gameData.score).toEqual(newGameData.score);

    undo();
    expect(gameData.boardData[0]).toEqual([0, 0, 0]);
    expect(gameData.boardData[1]).toEqual([0, 2, 2]);
    expect(gameData.boardData[2]).toEqual([0, 0, 0]);
    expect(gameData.score).toEqual(0);
  });
});