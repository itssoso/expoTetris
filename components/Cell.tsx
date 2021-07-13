import React from 'react'
import { StyleSheet, useWindowDimensions, View, ViewStyle } from 'react-native'
import { STAGE_WIDTH } from '../gameHelper'
import { TETROMINOS } from '../tetrominos'

function Cell({ type }: { type: any }): JSX.Element {
  const size = ((useWindowDimensions().width)-(STAGE_WIDTH*8))/STAGE_WIDTH
  
  return (
    <View
      style={styles(size, type).cell} />
  )
}
const styles = (size:number, type:any) => StyleSheet.create({
  cell: {
    flexGrow: 1,
    flexShrink:0,
    width: size,
    height: size,
    backgroundColor: `rgba(${TETROMINOS[type].color}, 0.8)`,
    borderWidth: type === 0 ? 0 : 4,
    borderStyle: 'solid',
    borderBottomColor: `rgba(${TETROMINOS[type].color}, 0.1)`,
    borderRightColor: `rgba(${TETROMINOS[type].color}, 1)`,
    borderTopColor: `rgba(${TETROMINOS[type].color}, 1)`,
    borderLeftColor: `rgba(${TETROMINOS[type].color}, 0.3)`,
  },
})
export default React.memo(Cell)