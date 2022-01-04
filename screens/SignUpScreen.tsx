import React, {useState} from "react";
import {View} from "react-native";
import {Button, Input} from "react-native-elements";
import {styles} from "./SignInScreen";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {RootStackScreenProps} from "../types";
import {auth} from "../firebase";


const SignUpScreen = ({ navigation }: RootStackScreenProps<'SignUp'>) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [profile, setProfile] = useState("こんにちは");
    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=> {
                let user = userCredential.user;
                updateProfile(user, {
                    displayName : name,
                    photoURL: imageURL? imageURL:"https://pbs.twimg.com/media/Dr40WvuU0AAaiPn.jpg",
                }).then(function(){
                    // Update successful.
                }).catch(function(error){
                    // An error happened.
                    // navigation.replace("Root")
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                });
                }
            )
    }
    return (
        <View style={styles.container}>
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
                onChangeText={text => setImageURL(text)}
            />
            <Button title="register" onPress= {register} style={styles.button} />
        </View>
    )
}

export default SignUpScreen