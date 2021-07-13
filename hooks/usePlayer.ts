import { useState, useCallback } from 'react'
import { STAGE_WIDTH, checkCollision } from '../gameHelper'

import { Props_Tetromino, TETROMINOS, randomTetromino } from '../tetrominos'
import { Props_Stage } from './useStage'

export type Props_Player = {
  pos: {
    x: number,
    y: number,
  },
  tetromino: Props_Tetromino["shape"],
  collided: boolean,
}

export const usePlayer = (): [Props_Player, (props:{x:number, y:number, collided: boolean}) => void, () => void, (stage: Props_Stage, dir: number) => void] => {
  const [player, setPlayer] = useState<Props_Player>({
    pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  })

  const rotate = (matrix: any[][], dir: number) => {
    // transpose
    const tMatrix = matrix.map((_, index) => matrix.map(col => col[index]))

    // reverse, conditional to rotate left/right
    return dir > 0 ?
      tMatrix.map(row => row.reverse()) :
      tMatrix.reverse()

  }

  const rotatePlayer = (stage, dir: number) => {
    const clonePlayer: Props_Player = JSON.parse(JSON.stringify(player))
    clonePlayer.tetromino = rotate(clonePlayer.tetromino, dir)

    const pos = clonePlayer.pos.x;
    if (!checkCollision(clonePlayer, stage, { moveX: 0, moveY: 0 })) setPlayer(clonePlayer)
  }

  const updatePlayerPos = ({ x, y, collided }:{x:number, y:number, collided: boolean}) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: prev.pos.x += x, y: prev.pos.y += y },
      collided,
    }))
  }

  const resetPlayer = useCallback((): void => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    })
  }, [])

  return [player, updatePlayerPos, resetPlayer, rotatePlayer]
}

export default usePlayer