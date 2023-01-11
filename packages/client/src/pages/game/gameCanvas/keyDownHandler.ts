import { makeMove, Movements } from 'entities/game-drive';

const keyMoveMap: Record<string, Movements> = {
  ArrowLeft: Movements.Left,
  ArrowUp: Movements.Top,
  ArrowRight: Movements.Right,
  ArrowDown: Movements.Bottom,
}

export const keyDownHandler: EventListenerOrEventListenerObject = event => {
  const { key } = event as KeyboardEvent
  if (key in keyMoveMap) {
    makeMove(keyMoveMap[key])
  }
}
