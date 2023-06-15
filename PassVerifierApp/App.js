import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Pressable, TouchableHighlight } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function App() {

  const [userName,setUserName] = useState('')
  const [passWord,setPassWord] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.textBoxContainer}>
        <View style={ styles.userNameTextBoxContainer}>
          <TextInput
          style = {styles.userNameTextBox}
          value= {userName}
          onChangeText = {(userName) => setUserName(userName)}
          placeholder = {'Username'}/>
        </View>
        <View style={ styles.passWordTextBoxContainer}>
          <TextInput
          style = {styles.passWordTextBox}
          value= {passWord}
          onChangeText = {(passWord) => setPassWord(passWord)}
          placeholder = {'Password'}/>
        </View>
        <View style={styles.loginButtonContainer} >
            <TouchableHighlight style={styles.loginButton} underlayColor='white' onPress={() => console.log("hello")}>
              <Text style={styles.loginButtonText}> LogIn </Text>
            </TouchableHighlight>
        </View>
      </View>   
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#273A9B',
  },
  textBoxContainer : {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  userNameTextBoxContainer: {
    alignItems: 'center',
  },
  userNameTextBox: {
    color: 'grey',
    fontSize: 20,
    backgroundColor: 'white',
    width: 400,
    height: 60,
    borderRadius: 4,
    paddingLeft: 20,
  },
  passWordTextBoxContainer: {
    alignItems: 'center',
  },
  passWordTextBox: {
    color: 'grey',
    fontSize: 20,
    backgroundColor: 'white',
    width: 400,
    height: 60,
    borderRadius: 4,
    paddingLeft: 20,
  },
  loginButtonContainer: {
    alignItems: 'center',
    paddingTop: 10,
  },
  loginButton : 
  {
    height: 60,
    width: 400,
    backgroundColor: '#F8A521',
    borderRadius: 20,
  },
  loginButtonText: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    paddingTop: 15,
  }
});
