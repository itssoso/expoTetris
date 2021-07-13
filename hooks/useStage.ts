import React, { useState, useEffect, Props } from 'react'
import { createStage } from '../gameHelper'
import { Props_Player } from './usePlayer'

export type Props_Stage = any[][]

export const useStage = (
  player: Props_Player,
  resetPlayer: () => void
): [Props_Stage, React.Dispatch<Props_Stage>, number] => {
  const [stage, setStage] = useState(createStage())
  const [rowsCleared, setRowsCleared] = useState(0)

  useEffect(() => {
    setRowsCleared(0)

    const sweepRow = (newStage: Props_Stage) =>
      newStage.reduce((acc, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev += 1)
          acc.unshift(new Array(newStage[0].length).fill([0, 'clear']))
          return acc;
        }
        acc.push(row)
        return acc
      }, [])

    const updateStage = (prevStage: Props_Stage): Props_Stage => {
      // flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
      )

      // draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              player.collided ? 'merged' : 'clear',
            ]
          }
        })
      })

      // check collision
      if (player.collided) {
        resetPlayer()
        return sweepRow(newStage)
      }

      return newStage
    }

    setStage(prev => updateStage(prev))
  }, [player])

  return [stage, setStage, rowsCleared]
}

export default useStage