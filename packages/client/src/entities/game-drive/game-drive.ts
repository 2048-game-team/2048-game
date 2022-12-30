import { createEvent, createStore, Event, forward, Store } from 'effector'
import { IGameData, GameStatusType, Array2D } from './types'

export class GameDrive {
  static __instance: GameDrive;
  static defaultBoardSize = { rows: 4, cols: 4 }
  
  $gameData!: Store<IGameData>
  $gameStatus!: Store<GameStatusType>

  rowCount!: number;
  colCount!: number;

  leftMove!: Event<void>
  topMove!: Event<void>
  rightMove!: Event<void>
  bottomMove!: Event<void>
  updateGameStatus!: Event<void>

  constructor(rowCount?: number, colCount?: number) {
    if (GameDrive.__instance) {
      return GameDrive.__instance
    }
    GameDrive.__instance = this

    this.rowCount = rowCount ?? GameDrive.defaultBoardSize.rows
    this.colCount = colCount ?? GameDrive.defaultBoardSize.cols
    this.createNewGame(this.rowCount, this.colCount)
    this.createEvents();
    this.subscribeEvents();
  }

  public createNewGame(rowCount: number, colCount: number) {
    const newBoard: Array2D = new Array(rowCount).fill(null).map(() => new Array(colCount).fill(0))
    // for test only!!!!, TODO: random placement
    newBoard[1][1] = 2
    this.$gameData = createStore<IGameData>({boardData: newBoard, score: 0})
    this.$gameStatus = createStore<GameStatusType>("on-game");
  }

  private createEvents() {
    this.leftMove = createEvent();
    this.topMove = createEvent();
    this.rightMove = createEvent();
    this.bottomMove = createEvent();
    this.updateGameStatus = createEvent();
  }

  private subscribeEvents() {
    this.$gameData
      .on(this.leftMove, this.leftMoveHandler.bind(this))
      .on(this.topMove, this.topMoveHandler.bind(this))
      .on(this.rightMove, this.rightMoveHandler.bind(this))
      .on(this.bottomMove, this.bottomMoveHandler.bind(this))
    forward({
      from: this.$gameData,
      to: this.updateGameStatus
    })
    this.$gameStatus
      .on(this.updateGameStatus, this.updateGameStatusHandler.bind(this))
  }

  private leftMoveHandler(gameData: IGameData): IGameData {
    // for test only!!!!, TODO: create real handler
    return {
      boardData: this.leftShift(gameData.boardData),
      score: gameData.score + 1
    };
  }

  private topMoveHandler(gameData: IGameData): IGameData {
  // for test only!!!!, TODO: create real handler 
    return {
      boardData: this.topShift(gameData.boardData),
      score: gameData.score + 1
    }
  }

  private rightMoveHandler(gameData: IGameData): IGameData {
    // for test only!!!!, TODO: create real handler 
    return {
      boardData: this.rightShift(gameData.boardData),
      score: gameData.score + 1
    }
  }

  private bottomMoveHandler(gameData: IGameData): IGameData {
    // for test only!!!!, TODO: create real handler 
    return {
      boardData: this.bottomShift(gameData.boardData),
      score: gameData.score + 1
    }
  }

  private leftShift(arr: Array2D): Array2D {
    return arr.map((row: number[]) => {
      row.shift()
      row.push(0)
      return row
    })
  }

  private topShift(arr: Array2D): Array2D {
    arr.shift()
    arr.push(new Array(this.colCount).fill(0))
    return arr
  } 

  private rightShift(arr: Array2D): Array2D {
    return arr.map((row: number[]) => {
      row.unshift(0)
      return row.slice(0, -1)
    })
  }

  private bottomShift(arr: Array2D): Array2D {
    arr.unshift(new Array(this.colCount).fill(0))
    return arr.slice(0, -1)
  } 

  private updateGameStatusHandler(): GameStatusType {
    // for test only!!!!, TODO: create real handler 
    let currentScore = 0;
    this.$gameData.watch(data => {currentScore = data.score})
    return currentScore < 4 ? "on-game": "win"
  }

}