import {Array2D, Cell} from 'entities/game-drive';
import {
  BORDER,
  FONT_STYLE,
  FIELD_COLOR,
  TEXT_COLOR,
  CELL_COLORS
} from './const';

const canvas: any = {
  width: null,
  height: null,
}

let thisCtx: any = null;

const cells: Array<Cell> = [];
const speed = 2;

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

const calculateCellWidthAndHeight = (
  gameState: Array2D,
  width: number,
  height: number
) => {
  const rows = gameState.length;
  const cols = gameState[0].length;
  const border = BORDER;
  const cellHeigth = (height - border * (rows + 1)) / rows;
  const cellWidth = (width - border * (cols + 1)) / cols;
  return { cellHeigth, cellWidth };
};

const drawBackground = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  ctx.fillStyle = FIELD_COLOR;
  roundRect(ctx, 0, 0, width, height, 10);
  ctx.fill();
};

const drawCell = (
  ctx: CanvasRenderingContext2D,
  cell: Cell
) => {
  getColor(ctx, cell.value);

  //анимация только для ячеек с числом
  if(cell.value != 0) {
    roundRect(ctx, cell.x, cell.y, cell.width, cell.height, 10);

    if(cell.width < cell.maxWidth) {
      cell.width += speed;
    }
    if (cell.height < cell.maxHeight) {
      cell.height += speed;
    }
  } else {
    roundRect(ctx, cell.x, cell.y, cell.maxWidth+1, cell.maxHeight+1, 10);
  }
  ctx.fill();

  ctx.font = FONT_STYLE;
  ctx.fillStyle = TEXT_COLOR;
  const textWidth = ctx.measureText(cell.value.toString()).width;
  ctx.fillText(cell.value.toString(), cell.x + ((cell.maxWidth-textWidth)/2), cell.y + (cell.maxHeight/1.7));
};

const update = () => {
  thisCtx.clearRect(0, 0, canvas.width, canvas.height);

  cells.forEach((item) => {
    drawCell(thisCtx, item);
  })
  requestAnimationFrame(update);
}

const getColor = (ctx: CanvasRenderingContext2D, value: number) => {
  switch (value) {
    case 2:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_2;
      break;
    case 4:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_4;
      break;
    case 8:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_8;
      break;
    case 16:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_16;
      break;
    case 32:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_32;
      break;
    case 64:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_64;
      break;
    case 128:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_128;
      break;
    case 256:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_256;
      break;
    case 512:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_512;
      break;
    case 1024:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_1024;
      break;
    case 2048:
      ctx.fillStyle = CELL_COLORS.CELL_COLOR_2048;
      break;
    default:
      ctx.fillStyle = CELL_COLORS.ZERO_CELL_COLOR;
      break;
  }
}

export const drawGame = (
  ctx: CanvasRenderingContext2D,
  gameState: Array2D,
  width: number,
  height: number
): void => {
  thisCtx = ctx;
  canvas.width = width;
  canvas.height = height;

  drawBackground(ctx, width, height);

  if (gameState.length === 0) {
    return;
  }

  const { cellHeigth, cellWidth } = calculateCellWidthAndHeight(
    gameState,
    width,
    height
  );

  gameState.forEach((row, rowIndex) => {
    row.forEach((cellValue, cellIndex) => {
      const x = BORDER + (BORDER + cellWidth) * cellIndex;
      const y = BORDER + (BORDER + cellHeigth) * rowIndex;
      const cell = {
        x: x,
        y: y,
        width: 0,
        height: 0,
        value: cellValue,
        maxWidth: cellWidth,
        maxHeight: cellHeigth,
      };
      cells.push(cell);
    });
  });

  update();
};
