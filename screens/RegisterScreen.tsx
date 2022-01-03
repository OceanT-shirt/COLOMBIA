import React from 'react'
import {useState} from "react"
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import  { db,auth } from '../firebase'
const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [profile, setProfile] = useState("こんにちは");
  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential)=> {
            var user = userCredential.user;
            user.updateProfile({
              displayName : name,
              photoURL: imageURL? imageURL:"https://pbs.twimg.com/media/Dr40WvuU0AAaiPn.jpg",
              profile: profile,
            }).then(function(){
                // Update successful.
              }).catch(function(error){
                // An error happened.
                navigation.replace("Root")
              });

            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              alert(errorMessage)
            }
          )
  }
return (
    <View styles={styles.container}>
          <Input
              placeholder='Enter your nickname'
              label='Nickname'
              leftIcon={{ type: 'material', name: 'badge' }}
              value={name}
              onChangeText={text => setName(text)}
          />
          <Input
              placeholder='Enter your email'
              label='Email'
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
          <Input
              placeholder='Enter your icon URL'
              label='Profile picture'
              leftIcon={{ type: 'material', name: 'face' }}
              value={imageURL}
              onChangeText={text => setimageURL(text)}
          />
      <Button title="register" onPress= {register} style={styles.button} />
    </View>
    )
}


export default RegisterScreen
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
    },
    button: {
    width: 200,
    marginTop: 10
    }
})
