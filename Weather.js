import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Weather() {
    return (
      <View style={styles.container}>
          <Text style={styles.text1}>(현재 위치)</Text>
          <Text style={styles.text2}>강남구 대치동</Text>
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