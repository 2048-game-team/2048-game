import { makeMove, Movements } from 'entities/game-drive';
import { toggleFullscreen } from './toggleFullscreen';

const keyMoveMap: Record<string, Movements> = {
  ArrowLeft: Movements.Left,
  ArrowUp: Movements.Top,
  ArrowRight: Movements.Right,
  ArrowDown: Movements.Bottom,
};

type GetKeydownHandler = (
  canvas: HTMLCanvasElement | null
) => EventListenerOrEventListenerObject;

export const getKeydownHandler: GetKeydownHandler = canvasElement => event => {
  const { key } = event as KeyboardEvent;
  if (key in keyMoveMap) {
    makeMove(keyMoveMap[key]);
  }
  if (key === 'Enter' && canvasElement) {
    toggleFullscreen(canvasElement);
  }
};
