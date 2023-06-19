import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Pressable, TouchableHighlight } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
export default function App() {

  // const URL = "http://127.0.0.1:8000/api/"
  const URL = "http://10.0.2.2:8000/api/"

  const [userName,setUserName] = useState('')
  const [passWord,setPassWord] = useState('')

  const Login = () =>
  {
    // return fetch(URL+`login?username=${userName}&password=${passWord}`)
    // .then((response) =>  response.json())
    // .then((data) =>  {
    //   console.log(data,"data");
    // })
    // .catch((error) => {
    //   console.log(error);
    // })

    axios.get(URL+`login?username=${userName}&password=${passWord}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }
  return (
    <View style={styles.container}>
      <View style={styles.textBoxContainer}>
        <View style={ styles.userNameTextBoxContainer}>
          <TextInput
          style = {styles.TextBox}
          value= {userName}
          onChangeText = {(userName) => setUserName(userName)}
          placeholder = {'Username'}/>
        </View>
        <View style={ styles.passWordTextBoxContainer}>
          <TextInput
          textContentType='password'
          secureTextEntry={true}
          style = {styles.TextBox}
          value= {passWord}
          onChangeText = {(passWord) => setPassWord(passWord)}
          placeholder = {'Password'}/>
        </View>
        <View style={styles.loginButtonContainer} >
            <TouchableHighlight style={styles.loginButton} underlayColor='#fabf61' 
            onPress={Login}>
              <Text style={styles.loginButtonText}> Log In </Text>
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
  TextBox: {
    color: 'grey',
    fontSize: 20,
    backgroundColor: 'white',
    width: 400,
    height: 60,
    borderRadius: 4,
    paddingLeft: 20,

  },
  textBoxContainer : {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  userNameTextBoxContainer: {
    alignItems: 'center',
  },
  passWordTextBoxContainer: {
    alignItems: 'center',
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
