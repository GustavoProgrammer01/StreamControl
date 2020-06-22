import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation"
import Home from '../screens/Home'
import Browser from '../screens/browser.js'
import Central from '../screens/Central.js'
import Redirect from '../screens/Redirect.js'

const HomeStack = createStackNavigator({
  Home: {
    path: 'home',
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTransparent: true,
      headerTitle: ''
    })
  },
  Browser: {
    screen: Browser,
    path: 'login',
    navigationOptions: ({ navigation }) => ({
      title: 'Insira seus dados:',
      headerTintColor: 'black'
    })
  },
  Central: {
    screen: Central,
    path: "Central",
    navigationOptions: ({ navigation }) => ({
      headerTransparent: true,
      headerLeft: null,
      headerTitle: ''
    })
  },
  Redirect: {
    screen: Redirect, 
    path: "Redirect",
    navigationOptions:({navigation}) => ({
      headerTransparent: true,
      headerLeft: null,
      headerTitle: ''
    })
  }
})

const AppContainer = createAppContainer(HomeStack);

export default AppContainer