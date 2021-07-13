import React from 'react'
import { StyleSheet, Pressable, Text, Dimensions } from 'react-native'

function StartText({ callback }: { callback: () => void | undefined }) {
  return (
    <Pressable
      style={styles.container}
      onPress={callback}
    >
      <Text style={styles.text}>Start</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
    alignSelf: 'center',
    top: Dimensions.get('window').height/3,
    width: Dimensions.get('window').width/2, 
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#333',
    borderColor: 'white',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
})

export default StartText