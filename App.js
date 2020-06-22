/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'axios';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import AppContainer from './navigation/AppNavigator.js'
const axios = require('axios').default;

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  
} from 'react-native/Libraries/NewAppScreen';


export default function App() {
  return <AppContainer />
}

const styles = StyleSheet.create({
  web: {
    marginTop: 100,
  },
});






