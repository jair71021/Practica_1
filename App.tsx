import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { style } from './src/theme/appTheme'

export const App = () => {
  return (
    <SafeAreaView style = {style.fondo}>
      <StatusBar backgroundColor = "black" barStyle = 'light-content' />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}
