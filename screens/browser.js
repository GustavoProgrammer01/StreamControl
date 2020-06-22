import React, { Component } from 'react'
import { WebView } from 'react-native-webview'
import "react-navigation"
import { Linking } from 'react-native';
import { set } from 'react-native-reanimated';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

var token
const timer = require('react-native-timer');

function Central(){
  this.props.navigation.navigate('Central')
}

class Browser extends Component {
  render() {
    const { params } = this.props.navigation.state
    return <WebView source={{ uri: params.link }} 
    onNavigationStateChange={(event) => {
      if (event.url !== 'https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=n9b6cz5pvvsdvf41b7wahwm9ednx06&redirect_uri=obscontroller://home&scope=user_read&state=c3ab8aa609ea11e793ae92361f002671') {
        token = event.url
        this.props.navigation.navigate('Redirect')
      }
    }
    }/>
  }
}


export default Browser