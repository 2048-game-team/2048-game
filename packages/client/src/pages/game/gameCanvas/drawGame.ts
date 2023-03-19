import { Array2D, Cell } from 'entities/game-drive';
import { getColor } from './getColor';
import {
  BORDER,
  FONT_STYLE_BIG,
  FONT_STYLE_MEDIUM,
  FONT_STYLE_SMALL,
  FIELD_COLOR,
  TEXT_COLOR
} from './const';

const canvas: any = {
  width: null,
  height: null,
}

const roundRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number) => {
  if (width < 2 * radius) radius = width / 2;
  if (height < 2 * radius) radius = height / 2;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  return ctx;
}

const calculateSizes = (
  gameState: Array2D,
  width: number,
  height: number,
) => {
  const rows = gameState.length;
  const cols = gameState[0].length;
  const border = BORDER;
  const cellHeigth = (height - border * (rows + 1)) / rows;
  const cellWidth = (width - border * (cols + 1)) / cols;
  const maxSize = Math.max(rows, cols);
  const fontName = 
    maxSize < 5 ? FONT_STYLE_BIG :
    maxSize < 7 ? FONT_STYLE_MEDIUM : 
    FONT_STYLE_SMALL;
  return { cellHeigth, cellWidth, fontName };
};

const drawBackground = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  ctx.fillStyle = FIELD_COLOR;
  ctx.fillRect(0, 0, width, height);
};

const drawCell = (
  ctx: CanvasRenderingContext2D,
  cell: Cell,
  fontName: string,
) => {
  ctx.fillStyle = getColor(cell.value);
  roundRect(ctx, cell.x, cell.y, cell.maxWidth+1, cell.maxHeight+1, 10);
  ctx.fill();

  ctx.font = fontName;
  ctx.fillStyle = TEXT_COLOR;
  const textWidth = ctx.measureText(cell.value.toString()).width;
  ctx.fillText(cell.value.toString(), cell.x + ((cell.maxWidth-textWidth)/2), cell.y + (cell.maxHeight/1.7));
};

const update = () => {
  console.log("update")
  /*thisCtx.clearRect(0, 0, canvas.width, canvas.height);

  cells.forEach((item) => {
    drawCell(thisCtx, item);
  })
  requestAnimationFrame(update);*/
}



export const drawGame = (
  ctx: CanvasRenderingContext2D,
  gameState: Array2D,
  width: number,
  height: number
): void => {
  
  canvas.width = width;
  canvas.height = height;

  drawBackground(ctx, width, height);

  if (gameState.length === 0) {
    return;
  }

  const { cellHeigth, cellWidth, fontName } = calculateSizes(
    gameState,
    width,
    height
  );

  gameState.forEach((row, rowIndex) => {
    row.forEach((cellValue, cellIndex) => {
      const x = BORDER + (BORDER + cellWidth) * cellIndex;
      const y = BORDER + (BORDER + cellHeigth) * rowIndex;
      // drawCell(ctx, x, y, cellWidth, cellHeigth, cellValue);
      const cell = {
        x: x,
        y: y,
        width: 0,
        height: 0,
        value: cellValue,
        maxWidth: cellWidth,
        maxHeight: cellHeigth,
      };
      drawCell(ctx, cell, fontName);
    });
  });

  //thisCtx.clearRect(0, 0, canvas.width, canvas.height);

 /* cells.forEach((item) => {
    drawCell(ctx, item);
  })*/

  //update();
};
