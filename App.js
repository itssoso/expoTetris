import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, View} from 'react-native'

import Tetris from './components/Tetris'

export default function App() {
    return (
        <View style={styles.container}>
            <Tetris />
            <StatusBar hidden/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
