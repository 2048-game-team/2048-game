const BORDER = 10
const FONT_STYLE = '20px serif'
const FIELD_COLOR = 'green'
const TEXT_COLOR = 'white'
const CELL_COLOR = 'pink'

const calculateCellWidthAndHeight = (
  gameState: number[][],
  width: number,
  height: number
) => {
  const rows = gameState.length
  const cols = gameState[0].length
  const border = BORDER
  const cellHeigth = (height - border * (rows + 1)) / rows
  const cellWidth = (width - border * (cols + 1)) / cols
  return { cellHeigth, cellWidth }
}

const drawBackground = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  ctx.fillStyle = FIELD_COLOR
  ctx.fillRect(0, 0, width, height)
}

const drawCell = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  value: number
): void => {
  ctx.fillStyle = CELL_COLOR
  ctx.fillRect(x, y, width, height)
  ctx.font = FONT_STYLE
  ctx.fillStyle = TEXT_COLOR
  ctx.fillText(value.toString(), x + 30, y + 30)
}

export const drawGame = (
  ctx: CanvasRenderingContext2D,
  gameState: number[][],
  width: number,
  height: number
): void => {
  drawBackground(ctx, width, height)

  const { cellHeigth, cellWidth } = calculateCellWidthAndHeight(
    gameState,
    width,
    height
  )

  gameState.forEach((row, rowIndex) => {
    row.forEach((cellValue, cellIndex) => {
      const x = BORDER + (BORDER + cellWidth) * cellIndex
      const y = BORDER + (BORDER + cellHeigth) * rowIndex
      drawCell(ctx, x, y, cellWidth, cellHeigth, cellValue)
    })
  })
}
