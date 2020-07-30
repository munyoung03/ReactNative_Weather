import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from "axios"
import * as Location from 'expo-location';

const Weather = () => {

  const [longitude, setLongitude]= useState(Number);
  const [latitude, setLatitude]= useState(Number);
  const [api,setApi] = useState({})


  const getLocation = async() => {
    console.log("2")
    try {
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();

      setLongitude(location.coords.longitude)
      setLatitude(location.coords.latitude)

      //key beb156f9ab48aafb74a83023fab39ef3  

      //

    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=beb156f9ab48aafb74a83023fab39ef3`) 
      
    setApi(data)
    console.log(api.city.name)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation()
  },[])
    return (
      <View style={styles.container}>
          <Text style={styles.text1}>(현재 위치)</Text>
    <Text style={styles.text2}>{api.city.name}</Text>
          <Text style={styles.text3}>맑음</Text>
            <Image
                style={styles.sun}
                source={require('./assets/sun.png')}/>
        <Text style={styles.text4}>27°</Text>
        <Text style={styles.text5}>어제보다 6°나 높아요</Text>
        <Text style={styles.text6}>최고 28°/ 최저 16°</Text>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "42%",
      backgroundColor: '#007EEF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sun: {
        marginTop: 20,
        height: 100,
        width: 100,
    },
    text1: {
        marginTop: 30,
        fontSize: 15,
        color: 'white',
    },
    text2: {
        marginTop: 10,
        fontSize: 25,
        color: 'white',
    },
    text3: {
        marginTop: 15,
        fontSize: 17,
        color: 'white',
    },
    text4: {
        marginLeft: 30,
        marginTop: 20,
        fontSize: 45,
        color: 'white',
    },
    text5: {
        marginTop: 10,
        fontSize: 17,
        color: 'white',
    },
    text6: {
        marginTop: 6,
        fontSize: 12,
        color: 'white',
    },
  });

  export default Weather