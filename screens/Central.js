import React, { Component, useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';
import Realm from "realm"

import 'obs-websocket-js'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';
import { set } from 'react-native-reanimated';

const timer = require('react-native-timer');
const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();
const image = { uri: "https://i.pinimg.com/originals/95/7a/a2/957aa20080131aa7cccca8ae42c0f414.png" };
const image2 = { uri: 'https://althacor.com.br/wp-content/uploads/2013/11/cinza-escuro.png'}
const image3 = { uri: 'https://t1.uc.ltmcdn.com/pt/images/1/7/1/como_colocar_fundo_preto_nas_fotos_16171_orig.jpg'}
var conexoes = 0
var ipVerify

import getRealm from '../Conexões/Realm.js'
import conexões from '../Conexões/Conexões.js'
import { State } from 'react-native-gesture-handler';


const Central = () => {
    function ActiveModal(_ip){
      SetModalActive(true)
    }
    
    async function saveConnections(){
      if(active != false){
        const data = {
          id: '1',
          name: Pegarnome,
          ip: Pegarip,
          rede: 'obs'
        }

        const realm = await getRealm( );  

        realm.write(() => {
          realm.create('ConexõesSchema', data)
        })
      }
    }

    function ConnectWithObs(Pegarip, Pegarnome){
      saveConnections();  
      obs.on('ConnectionOpened', () => {
        SetModalActive(false)
        obs.sendCallback('GetSceneList', {}, (err, data) => {
        });
      
        obs.send('GetSceneList').then(data => {
        });
      }); 
      obs.connect({ address: Pegarip + ':4444'}).catch(err => 
      { 
        
      });
    }
    const [ modalActive, SetModalActive] = useState(false)
    const [ Pegarip, SetIp ] = useState()
    const [ Pegarnome, SetName] = useState('DefaultConnection')
    const [ error, SetError] = useState('')
    const [ active, SetActive ] = useState(false)
    return (
      <>
      <ImageBackground source={(image)} style={styles.container}>
          <Text style={styles.BtnDown1}>Conexões</Text>
      </ImageBackground>
      <ImageBackground source={(image2)} style={styles.Background}>
        <TouchableOpacity style={styles.PlusBtn}
          onPress={ActiveModal}>
          <Text style={styles.PlusText}>+</Text>
        </TouchableOpacity>
        <Modal isVisible={modalActive} backdropOpacity={0.5}>
          <View style={styles.modal} >
            <View style={styles.janela}>
              <Text style={styles.ip}>Insira o ip do obs:</Text>
              <TextInput style={[styles.ipInput, {color: State  }]}
                value={ipVerify}
                onChangeText={(value) => {SetIp(value)}}>
              </TextInput>
              <Text style={styles.NameConnection}>Insira o nome da conexão:</Text>
              <TextInput style={styles.NameInput}
                onChangeText={(value) => {SetName(value)}}>
              </TextInput>
              <TouchableOpacity style={styles.ConectarBtn}
                onPress={() => ConnectWithObs(Pegarip, Pegarnome)}>
                <Text style={styles.ConectarTxt}>Conectar</Text>
              </TouchableOpacity>
              <Text style={styles.erro} >{error}</Text>  
            </View>
          </View>
        </Modal>
          <View style={styles.connections}>
            <TouchableOpacity>
              <Image source={require('../Imagens/config.png')} style={styles.config}></Image>
            </TouchableOpacity>
            <Text style={styles.ConnectionName}>{Pegarnome}</Text>
            <Text style={styles.showIp}>{Pegarip}</Text>
            <Image style={styles.obsimbol} source={require('../Imagens/obs.png')}></Image>
            <Image style={styles.linha} source={image3}></Image>
          </View>
      </ImageBackground>
      </>
    )
  
}

const styles = StyleSheet.create({
  linha: {
    height: 2,
    width: 365,
    marginTop: 10,
    marginLeft: 20,
  },
  showIp: {
    marginLeft: 35,
    marginTop: -10,
    color: 'grey'
  },
  config: {
    width: 25,
    height: 25,
    marginTop: 20,
    marginLeft: 7,
  },
  obsimbol: {
    width: 60,
    height: 60,
    position: "absolute",
    left: 320,
    right: 0,
    top: 5,
  },
  ConnectionName: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'sans-serif-medium',
    position: "absolute",
    left: 35,
    top: 10,
  },
  erro: {
    color: 'red',
    position: "absolute",
    left: 30,
    top: 40,
  },
  ConectarBtn: {
    position: "absolute",
    top: 132,
    left: 180,  
    width: 100,
  },
  ConectarTxt: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
    height: 30,
    textAlignVertical: "center",
    backgroundColor: 'grey',
    color: 'black',
    display: 'flex',
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  ipInput: {
    borderWidth: 1.5,
    width: 260,
    height: 40,
    color: 'black',
    position: "absolute",
    top: 30,
    left: 20,
    fontSize: 15,

  },
  NameInput: {
    borderWidth: 1.5,
    color: 'black',
    width: 260,
    height: 40,
    position: "absolute",
    top: 95,
    left: 20,
    fontSize: 15,
  },
  ip: {
    fontSize: 15,
    position: "absolute",
    left: 20,
    top: 5,
  },
  NameConnection: {
    position: "absolute",
    top: 70,
    left: 20,
    fontSize: 15,
  },
  janela: {
    width: 300,
    height: 180,
    backgroundColor: '#bbbcbd',
    borderRadius: 5
  },
  modal: {
    display: 'flex', 
    alignItems: "center",
    justifyContent: "center"
  },
  PlusBtn: {
    backgroundColor: 'purple',
    position: "absolute",
    right: 10,
    bottom: 50,
    borderRadius: 50,
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
  },
  PlusText: {
    fontSize: 50,
    lineHeight: 60,
    color: 'white',
  },
  Background: {
    marginTop: -560,
    flex: 1, 
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    width: null,
    height: 50,
},
  BtnDown1: {
    marginTop: 11,
    marginLeft: 25,
    fontSize: 20,
    color: 'white',
    fontFamily: 'sans-serif-medium',
  }
})

export default Central

