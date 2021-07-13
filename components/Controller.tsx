import React from 'react'
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native'

const Controller = ({ move, keyUp }) => {
  return (
    <View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <TouchableWithoutFeedback
          onPress={() => move('left')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>&lt;</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => move('rotate')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>ROTATE</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => move('right')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>&gt;</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback
        onPressIn={(e) => {
          move('drop')
        }}
        onPressOut={() => {
          keyUp()
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>DROP</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    minHeight: 40,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
  },
})
export default Controller