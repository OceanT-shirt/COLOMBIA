import React,{useState,useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { db,auth } from "../firebase"
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { getAuth } from 'firebase/compat/auth';
const editScreen = ({navigation}) => {
  const [email, setEmail] = useState(auth?.currentUser?.email);
  const [displayName, setName] = useState(auth?.currentUser?.displayName);
  const [photoURL, setURL] = useState(auth?.currentUser?.photoURL);
  const uid = auth?.currentUser?.uid;
  const [profile, setProfile] = useState(auth?.currentUser?.profile);
  const UpdateProfile = () => {
    var  user = auth.currentUser;
    user.updateProfile({
      displayName : displayName,
      photoURL: photoURL,
      profile : profile
    }).then(function(){
        navigation.replace("Profile")
      }).catch(function(error){
        // An error happened.
        navigation.replace("Root")
      });
}
  return (
    <View styles={styles.container}>
          <Input
              placeholder='Enter your name'
              label='name'
              leftIcon={{ type: 'material', name: 'face' }}
              value={displayName}
              onChangeText={text => setName(text)}
          />
          <Input
              placeholder='Enter your Icon URL'
              label='photoURL'
              leftIcon={{ type: 'material', name: 'face' }}
              value={photoURL}
              onChangeText={text => setURL(text)}
          />
          <Input
              placeholder='Enter your Profile'
              label='profile'
              leftIcon={{ type: 'material', name: 'face' }}
              value={profile}
              onChangeText={text => setProfile(text)}
          />
          <Button title="更新" onPress= {UpdateProfile} style={styles.button} />
    </View>)

}


export default editScreen
const styles = StyleSheet.create({
    button: {
    width: 10,
    marginTop: 10
    },
    container: {
    flex: 4,
    alignItems: 'center',
    padding: 30
    }

})
