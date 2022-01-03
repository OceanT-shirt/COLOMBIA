import {Image, StyleSheet} from "react-native";
import {Text, View} from "../components/Themed";
import { getAuth } from 'firebase/compat/auth';
import {Avatar,Input, Button} from "react-native-elements";
import {auth} from "../firebase";
import React,{useState,useEffect} from 'react'
import editScreen from '../screens/editScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

export default function ProfileScreen({navigation}) {
const signOut = () => {
  auth.signOut().then(() => {
      navigation.replace('Login')
  }).catch((error) => {
  })};


  const email = auth?.currentUser?.email;
  const displayName = auth?.currentUser?.displayName;
  const photoURL = auth?.currentUser?.photoURL;
  const uid = auth?.currentUser?.uid;
  const profile = auth?.currentUser?.profile;

    return (
        <View style={styles.container}>

            <Image style={styles.profilePic} source = {{uri:photoURL}}/>
            <Text style={styles.title}>{displayName}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Text style={styles.getStartedText} >{profile}</Text>
            <Button title="編集する" style={styles.button} onPress={() => navigation.navigate('editScreen')}/>
            <Button title="ログアウト" style={styles.button} onPress={signOut}/>
        </View>
    );
}

const styles = StyleSheet.create ({
    profilePic: {
        width: 192,
        height: 192,
        borderRadius: 48,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    button: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    width: 10,
    marginTop: 10
    },
});
