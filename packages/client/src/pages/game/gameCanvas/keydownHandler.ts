import { makeMove, Movements } from 'entities/game-drive';
import { toggleFullscreen } from './toggleFullscreen';
import { sfx } from 'entities/music';

const keyMoveMap: Record<string, Movements> = {
  ArrowLeft: Movements.Left,
  ArrowUp: Movements.Top,
  ArrowRight: Movements.Right,
  ArrowDown: Movements.Bottom,
};

type GetKeydownHandler = (
  canvas: HTMLCanvasElement | null,
  volume: number
) => EventListenerOrEventListenerObject;

export const getKeydownHandler: GetKeydownHandler =
  (canvasElement, volume) => event => {
    const { key } = event as KeyboardEvent;
    if (key in keyMoveMap) {
      makeMove(keyMoveMap[key]);
      sfx.playClick(volume);
    }
    if (key === 'Enter' && canvasElement) {
      toggleFullscreen(canvasElement);
    }
  };
