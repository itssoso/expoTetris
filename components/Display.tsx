import React from 'react'
import { Text, View } from 'react-native'

function Display({ gameOver, text }) {
  return (
    <View
      style={{
        flexGrow: 1,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: '#333',
        padding: 2,
        borderRadius: 10,
        backgroundColor: '#000',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 12,
          color: gameOver ? 'red' : '#999',
        }}>{text}</Text>
    </View>
  )
}

export default Display