const drawCell = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
): void => {
  ctx.strokeRect(x, y, width, height)
};

const BORDER = 10;
// const 

export const drawGame = (
  ctx: CanvasRenderingContext2D,
  gameState: number[][],
  width: number,
  height: number,
): void => {
  const rows = gameState.length;
  const cols = gameState[0].length;
  const border = BORDER;
  const cellHeigth = (height - border * (rows + 1)) / rows;
  const cellWidth = (width - border * (cols + 1)) / cols;
  
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, width, height)

  gameState.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const x = border + (border + cellWidth) * cellIndex;
      const y = border + (border + cellHeigth) * rowIndex;
      drawCell(ctx, x, y, cellWidth, cellHeigth);
    });
  });
  ctx.beginPath();

  ctx.stroke();
  console.log(gameState)
};
