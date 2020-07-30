import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function FineDust() {
    return (
    <View style={styles.container}>
      <View style={styles.container2}>
          <Image
                style={styles.devil}
                source={require('./assets/devil.png')}/>
            <Text style={styles.text}>미세미세{"\n"}매우나쁨</Text>
      </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width:"100%",
      height: "7%",
      marginBottom: 15,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      flexDirection: "row"
    },
    container2: {
        width:"27%",
        height: "70%",
        marginRight: 20,
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#3797F6',
        flexDirection: "row"
      },
    devil: {
        marginBottom: 5,
        width: 30,
        height: 30,
    },
    text: {
        marginRight: 20,
    }

  });