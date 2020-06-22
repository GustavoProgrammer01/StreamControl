import React, { Component } from 'react'
import "react-navigation"
import {CountDownText} from 'react-native-countdown-timer-text';
import Central from '../screens/Central.js'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Linking,
  TouchableOpacity,
} from 'react-native';

const image = { uri: "https://i.pinimg.com/originals/95/7a/a2/957aa20080131aa7cccca8ae42c0f414.png" };

function GotoCentral() {
  Linking.openURL('myapp://Central')
}

class Redirect extends Component {
    render() {
      return (
        <>
        <ImageBackground source={(image)} style={styles.container}>
            <Text style={styles.img}>Redirecionando você de volta para o aplicativo em:</Text>
            <CountDownText
              style={styles.timer}
              countType='seconds'
              auto={true}
              afterEnd={() => {GotoCentral()}}
              timeLeft={3}
              step={-1}
              startText='Start'
              endText='Retornando...'
              intervalText={(sec) => sec}
            />
        </ImageBackground>
        </>
      )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    timer: {
        color: "white",
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        textAlign: "center",
        marginTop: 10, 
    },
    img: {
        color: "white",
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        textAlign: "center",
        marginTop: 250,
    },
    btn: {
        color: 'white',
        fontSize: 15,
    }
  })

export default Redirect