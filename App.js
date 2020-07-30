import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Weather from './Weather';
import TopBar from './TopBar';
import Circle from './Circle';
import FineDust from './FineDust';
import BottomBarMenu from './BottomBarMenu';
import TimeWeather from './TimeWeather';


const App = () => {
  return (
    <View style={styles.container}>
      <TopBar/>
      <Weather />
      <Circle/>
      <FineDust/>
      <BottomBarMenu/>
      <TimeWeather/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007EEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App