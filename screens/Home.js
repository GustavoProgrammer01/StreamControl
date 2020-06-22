import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';

class Home extends Component {
  state = {
    links: [
      { title: 'Login twitch', link: 'https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=n9b6cz5pvvsdvf41b7wahwm9ednx06&redirect_uri=myapp://home&scope=user_read&state=c3ab8aa609ea11e793ae92361f002671' },
    ]
  }

  handleButtonPress(item) {
    const { title, link } = item
    this.props.navigation.navigate('Browser', { title, link })
  }

  render() {
    return (
      <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView>
         <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Text style={styles.EntrarText}>Entrar</Text>
            <View style={styles.body}>
            {this.state.links.map((item, index) => (
              <TouchableOpacity key={index} style={styles.button}
                onPress={() => this.handleButtonPress(item)}>
                <Text style={styles.BtnText}>Entrar</Text>
              </TouchableOpacity>
            ))}
            <Image style={styles.PequenaLogo}source={require('../Imagens/twitch.png')}/>
            </View>
          </ScrollView>
      </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  BtnText: {
    fontFamily: 'sans-serif-medium',
    textAlign: "center",
    color: "white",
    fontSize: 15,
    margin: 35,
  },
  button: {
    marginRight: 150,
    marginLeft: 150,
    backgroundColor: "purple",
    borderRadius: 5,
    height: 100,
    marginTop: 200,
    textAlign: "center",
  },
  EntrarText: {
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    marginLeft: 20,
    marginTop: 17,
  },
  PequenaLogo: {
    width: 50,
    height: 50,
    marginLeft: 180,
    position: "absolute",
    top: 140,
  },
})

export default Home