import { Props_Player } from './hooks/usePlayer'
import { Props_Stage } from './hooks/useStage'

export const STAGE_HEIGHT: number = 20
export const STAGE_WIDTH: number = 12

export const createStage = (): Props_Stage =>
  Array.from(Array(STAGE_HEIGHT), (): any[][] =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )

export const checkCollision = (
  player: Props_Player,
  stage: Props_Stage,
  { moveX, moveY }: { moveX: number, moveY: number }
): boolean => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // check if cell is part of tetrimino
      if (player.tetromino[y][x] !== 0) {
        if (
          // check if move is still inside stage y axis
          !stage[y + player.pos.y + moveY] ||
          // check if move is still inside stage x axis
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // check that we are only moving to a clear cell
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true
        }
      }
    }
  }
  return false
}
