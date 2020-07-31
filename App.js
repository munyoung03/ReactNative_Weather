import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Weather from './Weather';
import TopBar from './TopBar';
import Circle from './Circle';
import FineDust from './FineDust';
import BottomBarMenu from './BottomBarMenu';
import TimeWeather from './TimeWeather';
import axios from "axios"
import * as Location from 'expo-location';


const App = () => {
  const [longitude, setLongitude]= useState(Number);
  const [latitude, setLatitude]= useState(Number);
  const [api,setApi] = useState({})


  const getLocation = async() => {
    console.log("2")
    try {
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      //console.log(location)

      setLongitude(location.coords.longitude)
      setLatitude(location.coords.latitude)

      console.log(longitude)
      console.log(latitude)
      //'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID='+API_KEY;
      //
      const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=beb156f9ab48aafb74a83023fab39ef3`) 
      
      setApi(data)
      console.log(data)
      console.log(api.name)  
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation()
  },[])

  return (
    <View style={styles.container}>
      <TopBar/>
      <Weather data={api}/>
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