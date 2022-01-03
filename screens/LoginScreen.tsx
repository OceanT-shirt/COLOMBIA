import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from 'react-native-elements'
import { db,auth } from "../firebase"
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
  auth.signInWithEmailAndPassword(email, password)
  .catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage)
  });
  }
  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(function (user) {
  if (user) {
      navigation.replace('Root');
  } else {
      navigation.navigate("Login")
  }

  });
  return unsubscribe;
  }, [])

  return (
    <View styles={styles.container}>
          <Input
              placeholder='Enter your email'
              label='email'
              leftIcon={{ type: 'material', name: 'email' }}
              value={email}
              onChangeText={text => setEmail(text)}
          />
          <Input
              placeholder='Enter your password'
              label='Password'
              leftIcon={{ type: 'material', name: 'lock' }}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
          />
      <Button title="sign in" style={styles.button} onPress={signIn} />
      <Button title="register" style={styles.button} onPress={() => navigation.navigate('Register')} />
    </View>
    )

}


export default LoginScreen

const styles = StyleSheet.create({
  button: {
      width: 200,
      marginTop: 10
  },
  container: {
      flex: 4,
      alignItems: 'center',
      padding: 10
  }
});
