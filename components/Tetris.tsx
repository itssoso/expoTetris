import React, { useState } from 'react'
import { View, useWindowDimensions, Pressable } from 'react-native'

import { createStage, checkCollision } from '../gameHelper'

// Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'
import Controller from './Controller'

// Custom hooks
import useInterval from '../hooks/useInterval'
import usePlayer from '../hooks/usePlayer'
import useStage from '../hooks/useStage'
import useGameStatus from '../hooks/useGameStatus'


function Tetris() {
  const [droptime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const [playing, setPlaying] = useState(false)

  const [player, updatePlayerPos, resetPlayer, rotatePlayer] = usePlayer()
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer)
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)

  const movePlayer = (dir: number) => {
    if (!checkCollision(player, stage, { moveX: dir, moveY: 0 })) {
      updatePlayerPos({ x: dir, y: 0, collided: false })
    }
  }

  const startGame = (): void => {
    // reset everything
    setDropTime(1000)
    setStage(createStage())
    resetPlayer()
    setGameOver(false)
    setScore(0)
    setRows(0)
    setLevel(0)

    //start
    setPlaying(true)
  }

  const drop = () => {
    // increase level and drop speed
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1)
      setDropTime(1000 / (level + 1) + 200)
    }

    if (!checkCollision(player, stage, { moveX: 0, moveY: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      if (player.pos.y <= 0) {
        setGameOver(true)
        setPlaying(false)
        setDropTime(null)
      } else {
        updatePlayerPos({ x: 0, y: 0, collided: true })
      }
    }
  }

  const dropPlayer = () => {
    drop()
  }

  const move = (movement) => {
    if (!gameOver) {
      switch (movement) {
        case 'left':
          movePlayer(-1)
          break
        case 'right':
          movePlayer(1)
          break
        case 'drop':
          dropPlayer()
          break
        case 'rotate':
          rotatePlayer(stage, 0)
          break
      }
    }
  }

  const keyUp = () => {
    if (!gameOver) {
      setDropTime(1000 / (level + 1) + 200)
    }
  }

  useInterval(() => { drop() }, droptime)

  return (
    <View
      style={{
        flex: 1,
        width: useWindowDimensions().width,
        height: useWindowDimensions().height,
        backgroundColor: '#000',
        flexDirection: "column",
        padding: 40,
        maxWidth: 900,
      }}
    >
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Display gameOver={gameOver} text={`Score: ${score}`} />
        <Display gameOver={gameOver} text={`Rows: ${rows}`} />
        <Display gameOver={gameOver} text={`Level: ${level}`} />
      </View>
      <Stage stage={stage} />
      <Controller move={move} keyUp={keyUp} />
      {!playing ? (
        <StartButton callback={startGame} />
      ) : null}
    </View >
  )
}

export default Tetris