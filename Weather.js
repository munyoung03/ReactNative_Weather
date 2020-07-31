import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Weather = ({data}) => {

    return (
      <View style={styles.container}>
          <Text style={styles.text1}>(현재 위치)</Text>
    <Text style={styles.text2}>{data.name}</Text>
          <Text style={styles.text3}>{data.weather[0].main}</Text>
            <Image
                style={styles.sun}
                source={require('./assets/sun.png')}/>
        <Text style={styles.text4}>{Math.ceil(data.main.temp-273.15)}°</Text>
        <Text style={styles.text5}>어제보다 ??°나 높아요</Text>
        <Text style={styles.text6}>최고 {Math.ceil(data.main.temp_max-273.15)}°/ 최저 {Math.ceil(data.main.temp_min-273.15)}°</Text>

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "50%",
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