import { repeat } from 'core-js/core/string'
import React from 'react'
import { View, useWindowDimensions } from 'react-native'

import Cell from './Cell'
import { STAGE_WIDTH } from '../gameHelper'

function Stage({ stage }) {
  let height = stage.length
  let width = stage[0].length
  return (
    <View
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#333',
        width: '100%',
        maxWidth: useWindowDimensions().width,
        backgroundColor: '#111',
      }}>
      {stage.map((row, x) => row.map((cell, y) => <Cell key={`${x}-${y}`} type={cell[0]} />))}
    </View>
  )
}

export default Stage