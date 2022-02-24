import React, {useState} from "react";
import {View} from "react-native";
import {Button, Input} from "react-native-elements";
import {styles} from "./SignInScreen";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {RootStackScreenProps} from "../types";
import {db,auth} from "../firebase";
import { setDoc, doc, onSnapshot, orderBy, query} from "firebase/firestore";


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
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                });
                const uid = auth?.currentUser?.uid;
                const imageURL= auth?.currentUser?.imageURL;
                setDoc(
                  doc(
                    db,"profile","users","usersInfo",uid),
                {
                    uid: uid,
                    info:{
                              // createdAt: db.timestamp.fromDate(new Date()),
                              displayName : name,
                              photoURL: imageURL? imageURL:"https://pbs.twimg.com/media/Dr40WvuU0AAaiPn.jpg",
                              profile: profile,
                              score: 0}

                  });



                }
            )
    }
    return (
        <View style={styles.container}>
            <Button title="< Sign in" buttonStyle={styles.backButton} containerStyle={styles.buttonContainer} onPress={() => navigation.navigate('SignIn')} titleStyle={styles.buttonTitle} />
            <View style={styles.inputContainer}>
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
                <Input
                    placeholder='Enter your Profile Messages'
                    label='Profile messages'
                    leftIcon={{ type: 'material', name: 'face' }}
                    value={profile}
                    onChangeText={text => setProfile(text)}
                />
            </View>
            <Button title="Register >" onPress= {register} buttonStyle={styles.registerButton} containerStyle={styles.buttonContainer} titleStyle={styles.buttonTitle} />
        </View>
    )
}

export default SignUpScreen
